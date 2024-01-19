package dev.vitalii.springbootfullstackwithangular.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
public class Employee implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, unique = true, updatable = false)
    private Long id;

    private String name;
    private String email;
    private String jobTitle;
    private String phoneNumber;
    private String imageUrl;

    @Column(nullable = false, unique = true, updatable = false)
    private String employeeCode;
}
