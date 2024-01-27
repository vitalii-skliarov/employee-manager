package dev.vitalii.employeemanager.exception;

public class EmployeeNotFound extends RuntimeException {

    public EmployeeNotFound(Long id) {
        super("Employee by id " + id + " hasn't been found");
    }
}
