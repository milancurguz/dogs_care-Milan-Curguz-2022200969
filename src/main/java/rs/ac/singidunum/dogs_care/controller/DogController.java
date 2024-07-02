package rs.ac.singidunum.dogs_care.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.dogs_care.entity.Dog;
import rs.ac.singidunum.dogs_care.model.DogModel;
import rs.ac.singidunum.dogs_care.service.DogService;

import java.util.List;

@RestController
@RequestMapping(path = "/api/dog")
@RequiredArgsConstructor
@CrossOrigin
public class DogController {
    private final DogService service;

    @GetMapping
    public List<Dog> getAllDogs() {
        return service.getAllDogs();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Dog> getDogById(@PathVariable Integer id) {
        return ResponseEntity.of(service.getDogById(id));
    }

    @PostMapping
    public Dog createDog(@RequestBody Dog dog) {
        return service.createDog(dog);
    }

    @PutMapping(path = "/{id}")
    public Dog updateDog(@PathVariable Integer id, @RequestBody DogModel dog) {
        return service.updateDog(id, dog);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteDog(@PathVariable Integer id) {
        service.deletedDog(id);
    }
}
