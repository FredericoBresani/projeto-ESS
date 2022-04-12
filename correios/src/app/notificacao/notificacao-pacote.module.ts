import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { NotificacoesComponent } from './notificacoes/notificacoes.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
    declarations: [
        NotificacoesComponent,
        DialogComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
    ],
    providers: [],

  })

export class notificacaoPacoteModule {}
