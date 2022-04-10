import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro-pedidos/cadastro/cadastro.component';
import { PedidosComponent } from './cadastro-pedidos/pedidos/pedidos.component';
import { RastreamentoPacoteComponent } from './rastreio-pacote/rastreamento-pacote/rastreamento-pacote.component';

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
  },
  {
    path: 'correios/rastreamento-pacote',
    component: RastreamentoPacoteComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
