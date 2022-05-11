import { NgModule } from "@angular/core";
import { RequestService } from "./client/request.service";
import { Service } from "./Entrega/service";
@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [RequestService,Service],

})
export class SharedModule {}
