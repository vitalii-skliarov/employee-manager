import {HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {EmployeeService} from "./employee.service";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [],
  exports: [CommonModule],
  imports: [HttpClientModule, FormsModule],
  providers: [EmployeeService],
  bootstrap: []
})
export class AppModule {
}
