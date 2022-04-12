import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { PedidoClient } from 'src/app/shared/client/pedido.client';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.scss']
})
export class EnviosComponent implements OnInit {

  public pedidos?: Pedido[];

  constructor(private readonly pedidoClient: PedidoClient) { }

  ngOnInit(): void {
    this.pedidoClient.getPedidos().subscribe((pedidos) => {
      this.pedidos = pedidos;
    })
  }

  cancelarPedido(pedido: Pedido): void {
    this.pedidoClient.cancelarPedido(pedido).subscribe((pedidos) => {
      this.pedidos = pedidos;
    })
  }
}
