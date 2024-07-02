package rs.ac.singidunum.dogs_care.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.dogs_care.entity.DogOwner;

import java.util.List;
import java.util.Optional;

@Repository
public interface DogOwnerRepository extends JpaRepository<DogOwner, Integer> {
    List<DogOwner> findAllByDeletedAtIsNull();

    Optional<DogOwner> findByIdAndDeletedAtIsNull(Integer id);
}