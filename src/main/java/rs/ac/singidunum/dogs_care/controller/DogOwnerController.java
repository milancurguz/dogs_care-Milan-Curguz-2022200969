package rs.ac.singidunum.dogs_care.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.dogs_care.entity.DogOwner;
import rs.ac.singidunum.dogs_care.service.DogOwnerService;

import java.util.List;

@RestController
@RequestMapping(path = "/api/dogowner")
@RequiredArgsConstructor
@CrossOrigin
public class DogOwnerController {
    private final DogOwnerService service;

    @GetMapping
    public List<DogOwner> getAllDogOwners() {
        return service.getAllDogOwners();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<DogOwner> getDogOwnerById(@PathVariable Integer id) {
        return ResponseEntity.of(service.getDogOwnerById(id));
    }

    @PostMapping
    public DogOwner createDogOwner(@RequestBody DogOwner dogOwner) {
        return service.createDogOwner(dogOwner);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteDogOwner(@PathVariable Integer id) {
        service.deleteDogOwner(id);
    }
}
