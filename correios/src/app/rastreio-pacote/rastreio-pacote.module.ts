import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RastreamentoPacoteComponent } from "./rastreamento-pacote/rastreamento-pacote.component";
import { RastreioPacoteService } from "./rastreio-pacote.service";

@NgModule({
    declarations: [
        RastreamentoPacoteComponent
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
    ],
    providers: [RastreioPacoteService],
  })

export class rastreamentoPacoteModule {}
