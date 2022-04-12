import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro-pedidos/cadastro/cadastro.component';
import { PedidosComponent } from './cadastro-pedidos/pedidos/pedidos.component';
import { AuthGuard } from './guards/auth-guard';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {
    path: 'correios',
    canActivate: [AuthGuard],
    component: PedidosComponent,
  },
  {
    path: 'correios/pedidos',
    canActivate: [AuthGuard],
    component: PedidosComponent,
  },
  {
    path: 'correios/cadastrar-pedido',
    canActivate: [AuthGuard],
    component: CadastroComponent,
  },
  {
    path: '',    
    component: LoginComponent,
  },
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
