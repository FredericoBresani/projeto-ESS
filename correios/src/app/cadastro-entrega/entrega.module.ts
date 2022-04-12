import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntregaComponent } from './entrega/entrega.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EntregaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class EntregaModule { }
