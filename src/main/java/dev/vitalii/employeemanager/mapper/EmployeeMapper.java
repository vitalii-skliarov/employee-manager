package dev.vitalii.employeemanager.mapper;

import dev.vitalii.employeemanager.dto.EmployeeOutDto;
import dev.vitalii.employeemanager.model.Employee;
import org.springframework.stereotype.Component;

@Component
public class EmployeeMapper {

    public EmployeeOutDto map(Employee employee) {
        final EmployeeOutDto dto = new EmployeeOutDto();

        dto.setId(employee.getId());
        dto.setName(employee.getName());
        dto.setEmail(employee.getEmail());
        dto.setJobTitle(employee.getJobTitle());
        dto.setPhoneNumber(employee.getPhoneNumber());
        dto.setImageUrl(employee.getImageUrl());

        return dto;
    }
}
