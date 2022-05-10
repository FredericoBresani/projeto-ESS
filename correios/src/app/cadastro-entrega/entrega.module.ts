import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntregaComponent } from './entrega/entrega.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroEntregaService } from './cadastro-entrega.service';
import { EntregaRequest } from '../../app/shared/Entrega/entrega.request';
@NgModule({
  declarations: [
    EntregaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [CadastroEntregaService,EntregaRequest]
})
export class EntregaModule { }
