import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {EmployeeAddDto, EmployeeOutDto, EmployeeUpdateDto} from "./employee";
import {environment} from "../envorinment/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getEmployees(): Observable<EmployeeOutDto[]> {
    return this.http.get<EmployeeOutDto[]>(`${this.apiServerUrl}/api/employees`)
  }

  public getByIdEmployees(employeeId: number): Observable<EmployeeOutDto> {
    return this.http.get<EmployeeOutDto>(`${this.apiServerUrl}/api/employees/${employeeId}`)
  }

  public addEmployee(employee: EmployeeAddDto): Observable<EmployeeOutDto> {
    return this.http.post<EmployeeOutDto>(`${this.apiServerUrl}/api/employees`, employee)
  }

  public updateEmployee(employeeId: number, employee: EmployeeUpdateDto): Observable<EmployeeOutDto> {
    return this.http.put<EmployeeOutDto>(`${this.apiServerUrl}/api/employees/{employeeId}`, employee)
  }

  public deleteEmployee(employeeId: number): void {
    this.http.delete<number>(`${this.apiServerUrl}/api/employees/${employeeId}`)
  }
}
