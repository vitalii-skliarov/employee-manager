package dev.vitalii.employeemanager.controller;

import dev.vitalii.employeemanager.dto.EmployeeAddDto;
import dev.vitalii.employeemanager.dto.EmployeeOutDto;
import dev.vitalii.employeemanager.dto.EmployeeUpdateDto;
import dev.vitalii.employeemanager.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("api/employees")
@RestController
public class EmployeeRestController {

    private final EmployeeService employeeService;


    @ResponseStatus(HttpStatus.OK)
    @GetMapping
    public List<EmployeeOutDto> findAll() {
        return employeeService.findAll();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("{id}")
    public EmployeeOutDto findById(@PathVariable("id") Long id) {
        return employeeService.findById(id);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public EmployeeOutDto add(@RequestBody EmployeeAddDto dto) {
        return employeeService.add(dto);
    }

    @ResponseStatus(HttpStatus.OK)
    @PutMapping("{id}")
    public EmployeeOutDto update(@PathVariable("id") Long id, @RequestBody EmployeeUpdateDto dto) {
        return employeeService.update(id, dto);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") Long id) {
        employeeService.delete(id);
    }
}
