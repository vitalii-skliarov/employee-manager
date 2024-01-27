package dev.vitalii.employeemanager.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmployeeOutDto {

    private Long id;
    private String name;
    private String email;
    private String jobTitle;
    private String phoneNumber;
    private String imageUrl;
}
