import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BarComponent
  ]
})
export class NavBarModule { }
