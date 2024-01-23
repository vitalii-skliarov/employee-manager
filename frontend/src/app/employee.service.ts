import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../envorinment/environment";
import {EmployeeOutDto, EmployeeAddDto, EmployeeUpdateDto} from "./employee";

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

  public updateEmployee(employeeId: number | null, employee: EmployeeUpdateDto): Observable<EmployeeOutDto> {
    return this.http.put<EmployeeOutDto>(`${this.apiServerUrl}/api/employees/${employeeId}`, employee)
  }

  public deleteEmployee(employeeId?: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/employees/${employeeId}`)
  }
}
