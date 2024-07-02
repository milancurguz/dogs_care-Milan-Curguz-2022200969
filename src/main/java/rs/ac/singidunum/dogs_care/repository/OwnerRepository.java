package rs.ac.singidunum.dogs_care.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import rs.ac.singidunum.dogs_care.entity.Owner;

import java.util.List;
import java.util.Optional;

@Repository
public interface OwnerRepository extends JpaRepository<Owner, Integer> {
    List<Owner> findAllByDeletedAtIsNull();

    Optional<Owner> findByIdAndDeletedAtIsNull(Integer id);
}
