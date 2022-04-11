import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { CadastroPedidosModule } from './cadastro-pedidos/cadastro-pedidos.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { EnviosComponent } from './envio-de-pacote/envios/envios.component';
import { EnvioDePacotesModule } from './envio-de-pacote/envio-de-pacotes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    CadastroPedidosModule,
    SharedModule,
    HttpClientModule,
    EnvioDePacotesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
