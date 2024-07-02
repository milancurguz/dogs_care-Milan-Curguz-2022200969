package rs.ac.singidunum.dogs_care.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rs.ac.singidunum.dogs_care.entity.Owner;
import rs.ac.singidunum.dogs_care.model.OwnerModel;
import rs.ac.singidunum.dogs_care.service.OwnerService;

import java.util.List;

@RestController
@RequestMapping(path = "/api/owner")
@RequiredArgsConstructor
@CrossOrigin
public class OwnerController {
    private final OwnerService service;

    @GetMapping
    public List<Owner> getAllOwners() {
        return service.getAllOwners();
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Owner> getOwnerById(@PathVariable Integer id) {
        return ResponseEntity.of(service.getOwnerById(id));
    }

    @PostMapping
    public Owner createOwner(@RequestBody Owner owner) {
        return service.createOwner(owner);
    }

    @PutMapping(path = "/{id}")
    public Owner updateOwner(@PathVariable Integer id, @RequestBody OwnerModel owner) {
        return service.updateOwner(id, owner);
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(code = HttpStatus.NO_CONTENT)
    public void deleteOwner(@PathVariable Integer id) {
        service.deletedOwner(id);
    }
}
