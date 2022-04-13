import { EnviosComponent } from './envios/envios.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RotaComponent } from './rota/rota.component';
import { EnvioDePacotesService } from './envio-de-pacotes.service';

@NgModule({
  declarations: [
    EnviosComponent,
    RotaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [EnvioDePacotesService]
})
export class EnvioDePacotesModule { }
