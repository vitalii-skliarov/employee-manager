import { HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {EmployeeService} from "./employee.service";

@NgModule({
  declarations: [],
  exports: [],
  imports: [HttpClientModule],
  providers: [EmployeeService],
  bootstrap: []
})
export class AppModule {}
