import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../envorinment/environment";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/api/employees`)
  }

  public getByIdEmployees(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiServerUrl}/api/employees/${employeeId}`)
  }

  public addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/api/employees`, employee)
  }

  public updateEmployee(employeeId: number, employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/api/employees/${employeeId}`, employee)
  }

  public deleteEmployee(employeeId?: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/employees/${employeeId}`)
  }
}
