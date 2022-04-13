import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { LoginService } from "./login.service";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
      CommonModule,
      ReactiveFormsModule,
  ],
  providers: [LoginService],
})
export class loginModule {}
