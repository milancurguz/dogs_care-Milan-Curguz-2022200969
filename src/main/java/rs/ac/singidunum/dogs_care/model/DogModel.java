package rs.ac.singidunum.dogs_care.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class DogModel {
    private String name;
    private String breed;
    private int age;
    private String img;
}
