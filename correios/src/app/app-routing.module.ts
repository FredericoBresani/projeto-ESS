import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro-pedidos/cadastro/cadastro.component';
import { PedidosComponent } from './cadastro-pedidos/pedidos/pedidos.component';
import { EntregaComponent } from './cadastro-entrega/entrega/entrega.component';
import { AuthGuard } from './guards/auth-guard';
import { LoginComponent } from './login/login/login.component';
import { EnviosComponent } from './envio-de-pacote/envios/envios.component';
import { RotaComponent } from './envio-de-pacote/rota/rota.component';
import { RastreamentoPacoteComponent } from './rastreio-pacote/rastreamento-pacote/rastreamento-pacote.component';
import { NotificacoesComponent } from './notificacao/notificacoes/notificacoes.component';
import { AuthGuardAdmin } from './guards/auth-guard-admin';
import { AuthGuardClient } from './guards/auth-guard-client';

const routes: Routes = [
  {
    path: 'correios',
    canActivate: [AuthGuard],
    component: PedidosComponent,
  },
  {
    path: 'correios/pedidos',
    canActivate: [AuthGuardClient],
    component: PedidosComponent,
  },
  {
    path: 'correios/cadastrar-pedido',
    canActivate: [AuthGuard],
    component: CadastroComponent,

  },{
    path: 'correios/entrega',
    canActivate: [AuthGuardAdmin],
    component: EntregaComponent
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'correios/envio-de-pacote',
    canActivate: [AuthGuardAdmin],
    component: EnviosComponent,
  },
  {
    path: 'correios/rota',
    canActivate: [AuthGuardAdmin],
    component: RotaComponent,
  },
  {
    path: 'correios/rastreamento-pacote',
    canActivate: [AuthGuardClient],
    component: RastreamentoPacoteComponent,
  },
  {
    path: 'correios/notificacoes',
    canActivate: [AuthGuardClient],
    component: NotificacoesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
