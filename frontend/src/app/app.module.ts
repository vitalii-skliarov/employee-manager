import { HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {EmployeeService} from "./employee.service";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [],
  exports: [CommonModule],
  imports: [HttpClientModule],
  providers: [EmployeeService],
  bootstrap: []
})
export class AppModule {}
