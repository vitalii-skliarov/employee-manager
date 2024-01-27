package dev.vitalii.employeemanager.service;

import dev.vitalii.employeemanager.dto.EmployeeAddDto;
import dev.vitalii.employeemanager.dto.EmployeeOutDto;
import dev.vitalii.employeemanager.dto.EmployeeUpdateDto;
import dev.vitalii.employeemanager.mapper.EmployeeMapper;
import dev.vitalii.employeemanager.model.Employee;
import dev.vitalii.employeemanager.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final EmployeeMapper employeeMapper;


    public List<EmployeeOutDto> findAll() {
        return employeeRepository.findAll()
                .stream()
                .map(employeeMapper::map)
                .collect(Collectors.toList());
    }

    public EmployeeOutDto findById(Long id) {
        return employeeMapper.map(employeeRepository.find(id));
    }

    public EmployeeOutDto add(EmployeeAddDto dto) {
        final Employee employee = new Employee();

        employee.setName(dto.getName());
        employee.setEmail(dto.getEmail());
        employee.setJobTitle(dto.getJobTitle());
        employee.setPhoneNumber(dto.getPhoneNumber());
        employee.setImageUrl(dto.getImageUrl());
        employee.setEmployeeCode(UUID.randomUUID().toString());

        return employeeMapper.map(employeeRepository.save(employee));
    }

    public EmployeeOutDto update(Long id, EmployeeUpdateDto dto) {
        final Employee employee = employeeRepository.find(id);

        employee.setName(dto.getName());
        employee.setEmail(dto.getEmail());
        employee.setJobTitle(dto.getJobTitle());
        employee.setPhoneNumber(dto.getPhoneNumber());
        employee.setImageUrl(dto.getImageUrl());

        return employeeMapper.map(employeeRepository.save(employee));
    }

    public void delete(Long id) {
        employeeRepository.deleteById(id);
    }
}
