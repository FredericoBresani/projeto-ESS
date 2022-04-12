import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro-pedidos/cadastro/cadastro.component';
import { PedidosComponent } from './cadastro-pedidos/pedidos/pedidos.component';
import { EntregaComponent } from './cadastro-entrega/entrega/entrega.component';
import { EnviosComponent } from './envio-de-pacote/envios/envios.component';
import { RotaComponent } from './envio-de-pacote/rota/rota.component';
import { RastreamentoPacoteComponent } from './rastreio-pacote/rastreamento-pacote/rastreamento-pacote.component';
import { NotificacoesComponent } from './notificacao/notificacoes/notificacoes.component';


const routes: Routes = [
  {
    path: 'correios',
    component: PedidosComponent,
  },
  {
    path: 'correios/pedidos',
    component: PedidosComponent,
  },
  {
    path: 'correios/cadastrar-pedido',
    component: CadastroComponent,

  },{
    path: 'correios/entrega',
    component: EntregaComponent
  },
  {
    path: 'correios/envio-de-pacote',
    component: EnviosComponent,
  },
  {
    path: 'correios/rota',
    component: RotaComponent,
  },
  {
    path: 'correios/rastreamento-pacote',
    component: RastreamentoPacoteComponent,
  },
  {
    path: 'correios/notificacoes',
    component: NotificacoesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
