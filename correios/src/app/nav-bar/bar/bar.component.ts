import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Usuario } from '../../../../../Common/Usuario'

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  public options = [{path: 'correios/cadastrar-pedido', text: 'Cadastrar Pedido'}, 
                    {path: 'correios/pedidos', text: 'Pedidos'}, 
                    {path: 'correios/envio-de-pacote', text: 'Entregas'}, 
                    {path: 'correios/entrega', text: 'Rota Entrega'}, 
                    {path: 'correios/rota', text: 'Rotas'},
                    {path: 'correios/rastreamento-pacote', text: 'Rastreamento de pacotes'}, 
                    {path: 'correios/notificacoes', text: 'Notificação do Pacote'}];

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  showNavOptions(): void {
    document.querySelector('.navoptions')?.classList.toggle('navoptions-show');
  }

  logOut(): void{
    var userLogin = new Usuario("", "",false, "","");
    // localStorage.setItem('USUARIO', JSON.stringify(usuario));
    localStorage.setItem("USUARIO",JSON.stringify(userLogin));
    localStorage.clear();
    this.router.navigate(['']);
  }

}
