package rs.ac.singidunum.dogs_care.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.dogs_care.entity.DogOwner;
import rs.ac.singidunum.dogs_care.repository.DogOwnerRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DogOwnerService {
    private final DogOwnerRepository repository;

    public List<DogOwner> getAllDogOwners() {
        return repository.findAllByDeletedAtIsNull();
    }

    public Optional<DogOwner> getDogOwnerById(Integer id) {
        return repository.findByIdAndDeletedAtIsNull(id);
    }

    public DogOwner createDogOwner(DogOwner dogOwner) {
        dogOwner.setId(null);
        return repository.save(dogOwner);
    }

    public void deleteDogOwner(Integer id) {
        DogOwner dogOwner = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        dogOwner.setDeletedAt(LocalDateTime.now());
        repository.save(dogOwner);
    }
}
