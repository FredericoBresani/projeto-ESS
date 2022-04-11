import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/shared/models/pedido.model';
import { PedidoClient } from 'src/app/shared/client/pedido.client';

@Component({
  selector: 'app-rota',
  templateUrl: './rota.component.html',
  styleUrls: ['./rota.component.scss']
})
export class RotaComponent implements OnInit {

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

  atualizarCaminhoPedido( pedido: Pedido): void {

    if(pedido.endereco_entrega=="PE" ){
      if(pedido.estado_atual[pedido.estado_atual.length-1]=="DF"){
        pedido.estado_atual.push("GO");
      }
      else if(pedido.estado_atual[pedido.estado_atual.length-1]=="GO"){
        pedido.estado_atual.push("BA");
      }
      else if(pedido.estado_atual[pedido.estado_atual.length-1]=="BA"){
        pedido.estado_atual.push("PE");
      }
    }//SO VAI PRECISAR enviar pedido no paramentro
    this.pedidoClient.atualizarPedido(pedido).subscribe((pedidos) => {
      this.pedidos = pedidos;
    })
  }

}
