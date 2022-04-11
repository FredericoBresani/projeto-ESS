import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro-pedidos/cadastro/cadastro.component';
import { PedidosComponent } from './cadastro-pedidos/pedidos/pedidos.component';
import { EnviosComponent } from './envio-de-pacote/envios/envios.component';
import { RotaComponent } from './envio-de-pacote/rota/rota.component';

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
    path: 'correios/envio-de-pacote',
    component: EnviosComponent,
  },
  {
    path: 'correios/rota',
    component: RotaComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
