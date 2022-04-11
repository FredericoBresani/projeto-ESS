import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NotificacoesComponent } from './notificacoes/notificacoes.component';

@NgModule({
    declarations: [
        NotificacoesComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
    ],
    providers: [],
    
  })

export class notificacaoPacoteModule {}