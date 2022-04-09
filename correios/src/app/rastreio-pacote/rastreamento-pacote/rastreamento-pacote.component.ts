import { Component, OnInit } from '@angular/core';
import { PedidoClient } from 'src/app/shared/client/pedido.client';
import { Pedido } from 'src/app/shared/models/pedido.model';

@Component({
  selector: 'app-rastreamento-pacote',
  templateUrl: './rastreamento-pacote.component.html',
  styleUrls: ['./rastreamento-pacote.component.scss']
})
export class RastreamentoPacoteComponent implements OnInit {

  public pedidos?: Pedido[];

  constructor(private readonly pedidoClient: PedidoClient) { }

  ngOnInit(): void {
    this.pedidoClient.getPedidos().subscribe((pedidos) => {
      this.pedidos = pedidos;
    })
  }  
}
