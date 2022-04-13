import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { DialogComponent } from './dialog/dialog.component';
import { NotificacaoPacoteService } from "./notificacao-pacote.service";

@NgModule({
    declarations: [
        NotificacoesComponent,
        DialogComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
    ],
    providers: [NotificacaoPacoteService],
  })

export class notificacaoPacoteModule {}
