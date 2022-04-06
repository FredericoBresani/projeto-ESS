import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastroComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class CadastroPedidosModule { }
