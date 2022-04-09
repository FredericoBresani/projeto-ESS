import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { CadastroPedidosModule } from './cadastro-pedidos/cadastro-pedidos.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { rastreamentoPacoteModule } from './rastreio-pacote/rastreio-pacote.module';
import { NotificacoesComponent } from './notificacao/notificacoes/notificacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    NotificacoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    CadastroPedidosModule,
    SharedModule,
    HttpClientModule,
    rastreamentoPacoteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
