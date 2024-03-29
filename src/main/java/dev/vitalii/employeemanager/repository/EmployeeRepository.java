package dev.vitalii.employeemanager.repository;

import dev.vitalii.employeemanager.exception.EmployeeNotFound;
import dev.vitalii.employeemanager.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    default Employee find(Long id) {
        return findById(id)
                .orElseThrow(() -> new EmployeeNotFound(id));
    }
}
