import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { CadastroPedidosModule } from './cadastro-pedidos/cadastro-pedidos.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { loginModule } from './login/login.module';   
import { EnviosComponent } from './envio-de-pacote/envios/envios.component';
import { EnvioDePacotesModule } from './envio-de-pacote/envio-de-pacotes.module';
import { rastreamentoPacoteModule } from './rastreio-pacote/rastreio-pacote.module';
import { notificacaoPacoteModule } from './notificacao/notificacao-pacote.module';
import { EntregaModule } from './cadastro-entrega/entrega.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule,
    ReactiveFormsModule,
    CadastroPedidosModule,
    loginModule,
    SharedModule,
    EntregaModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EnvioDePacotesModule,
    rastreamentoPacoteModule,
    BrowserAnimationsModule,
    notificacaoPacoteModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
