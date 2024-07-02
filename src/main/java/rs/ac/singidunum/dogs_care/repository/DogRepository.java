package rs.ac.singidunum.dogs_care.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.dogs_care.entity.Dog;

import java.util.List;
import java.util.Optional;

@Repository
public interface DogRepository extends JpaRepository<Dog, Integer> {
    List<Dog> findAllByDeletedAtIsNull();

    Optional<Dog> findByIdAndDeletedAtIsNull(Integer id);
}
