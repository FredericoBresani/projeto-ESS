import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { LoginService } from "./login.service";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
      CommonModule,
      ReactiveFormsModule,
      SharedModule
  ],
  providers: [LoginService], 
})
export class loginModule {}
