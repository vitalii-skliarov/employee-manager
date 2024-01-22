import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "./employee.service";
import {HttpErrorResponse} from "@angular/common/http";
import {AppModule} from "./app.module";
import {Employee} from "./employee";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AppModule, FormsModule]
})
export class AppComponent implements OnInit {
  public employees: Employee[] = [];
  public editEmployee: Employee | null = null;
  public deleteEmployee: Employee | null = null;


  public constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public onAddEmployee(addForm: NgForm): void {
    document.getElementById('add-employee-form')?.click();

    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
    addForm.reset()
  }

  public onUpdateEmployee(employee: Employee): void {
    this.employeeService.updateEmployee(employee.id, employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public onDeleteEmployee(employeeId?: number): void {
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchEmployees(key: string): void {
    console.log(key);

    const results: Employee[] = [];

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

  public onOpenModal(employee: Employee | null, mode: string): void {
    // this.editEmployee = null;
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if (mode == 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode == 'edit') {
      this.editEmployee = employee;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode == 'delete') {
      this.deleteEmployee = employee;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }

    container?.appendChild(button);
    button.click();
  }
}
