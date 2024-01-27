package dev.vitalii.employeemanager.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeAddDto {

    private String name;
    private String email;
    private String jobTitle;
    private String phoneNumber;
    private String imageUrl;
}
