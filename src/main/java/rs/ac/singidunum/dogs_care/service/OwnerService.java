package rs.ac.singidunum.dogs_care.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.dogs_care.entity.Owner;
import rs.ac.singidunum.dogs_care.model.OwnerModel;
import rs.ac.singidunum.dogs_care.repository.OwnerRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OwnerService {
    private final OwnerRepository repository;

    public List<Owner> getAllOwners() {
        return repository.findAllByDeletedAtIsNull();
    }

    public Optional<Owner> getOwnerById(Integer id) {
        return repository.findByIdAndDeletedAtIsNull(id);
    }

    public Owner createOwner(Owner owner) {
        owner.setId(null);
        return repository.save(owner);
    }

    public Owner updateOwner(Integer id, OwnerModel model) {
        Owner owner = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        owner.setFirstName(model.getFirstName());
        owner.setLastName(model.getLastName());
        owner.setAddress(model.getAddress());
        owner.setUpdatedAt(LocalDateTime.now());
        return repository.save(owner);
    }

    public void deletedOwner(Integer id) {
        Owner owner = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        owner.setDeletedAt(LocalDateTime.now());
        repository.save(owner);
    }
}
