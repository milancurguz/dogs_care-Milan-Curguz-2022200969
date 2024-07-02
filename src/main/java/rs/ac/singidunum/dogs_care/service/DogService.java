package rs.ac.singidunum.dogs_care.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import rs.ac.singidunum.dogs_care.entity.Dog;
import rs.ac.singidunum.dogs_care.model.DogModel;
import rs.ac.singidunum.dogs_care.repository.DogRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DogService {
    private final DogRepository repository;

    public List<Dog> getAllDogs() {
        return repository.findAllByDeletedAtIsNull();
    }

    public Optional<Dog> getDogById(Integer id) {
        return repository.findByIdAndDeletedAtIsNull(id);
    }

    public Dog createDog(Dog dog) {
        dog.setId(null);
        return repository.save(dog);
    }

    public Dog updateDog(Integer id, DogModel model) {
        Dog dog = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        dog.setName(model.getName());
        dog.setBreed(model.getBreed());
        dog.setAge(model.getAge());
        dog.setImg(model.getImg());
        dog.setUpdatedAt(LocalDateTime.now());
        return repository.save(dog);
    }

    public void deletedDog(Integer id) {
        Dog dog = repository.findByIdAndDeletedAtIsNull(id).orElseThrow();
        dog.setDeletedAt(LocalDateTime.now());
        repository.save(dog);
    }
}
