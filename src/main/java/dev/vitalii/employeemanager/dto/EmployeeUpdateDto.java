package dev.vitalii.employeemanager.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeUpdateDto {

    private String name;
    private String email;
    private String jobTitle;
    private String phoneNumber;
    private String imageUrl;
}
