import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "./employee.service";
import {AppModule} from "./app.module";
import {EmployeeOutDto, EmployeeUpdateDto} from "./employee";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AppModule, FormsModule]
})
export class AppComponent implements OnInit {
  public employees: EmployeeOutDto[] = [];
  public editEmployeeId: number | null = null;
  public editEmployee: EmployeeUpdateDto | null = null;
  public deleteEmployee: EmployeeOutDto | null = null;


  public constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (response) => {
        this.employees = response;
        console.log(response);
      },
      error: (e) => {
        alert(e.message)
      }
    });
  }

  public onAddEmployee(addForm: NgForm): void {
    document.getElementById('add-employee-form')?.click();

    this.employeeService.addEmployee(addForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.getEmployees();
        addForm.reset();
      },
      error: (e) => {
        alert(e.message);
      }
    });
  }

  public onUpdateEmployee(employeeId: number | null, employee: EmployeeUpdateDto): void {
    this.employeeService.updateEmployee(employeeId, employee).subscribe({
      next: (response) => {
        console.log(response);
        this.getEmployees();
      },
      error: (e) => {
        alert(e.message);
      }
    })
  }

  public onDeleteEmployee(employeeId?: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe({
      next: (response) => {
        console.log(response);
        this.getEmployees();
      },
      error: (error) => {
        alert(error.message);
      }
    });
  }

  public searchEmployees(key: string): void {
    console.log(key);

    const results: EmployeeOutDto[] = [];

    for (const employee of this.employees) {
      let searchString = key.toLowerCase();

      if ((employee.name !== null && employee.name?.toLowerCase().indexOf(searchString) !== -1)
        || (employee.email !== null && employee.email?.toLowerCase().indexOf(searchString) !== -1)
        || (employee.jobTitle !== null && employee.jobTitle?.toLowerCase().indexOf(searchString) !== -1)
        || (employee.phoneNumber !== null && employee.phoneNumber?.toLowerCase().indexOf(searchString) !== -1)) {
        results.push(employee);
      }
    }

    this.employees = results;

    if (results.length === 0 || !key) {
      this.getEmployees();
    }
  }

  public onOpenModalAdd(): void {
    this.editEmployee = null;

    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    button.setAttribute('data-target', '#addEmployeeModal');

    container?.appendChild(button);
    button.click();
  }

  public onOpenModalEdit(employeeId: number | null, employee: EmployeeOutDto | null): void {
    this.editEmployee = null;

    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    this.editEmployeeId = employeeId;
    this.editEmployee = employee;
    button.setAttribute('data-target', '#updateEmployeeModal');

    container?.appendChild(button);
    button.click();
  }

  public onOpenModalDelete(employee: EmployeeOutDto | null): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    this.deleteEmployee = employee;
    button.setAttribute('data-target', '#deleteEmployeeModal');

    container?.appendChild(button);
    button.click();
  }
}
