package rs.ac.singidunum.dogs_care.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
public class OwnerModel {
    private String firstName;
    private String lastName;
    private String address;
}
