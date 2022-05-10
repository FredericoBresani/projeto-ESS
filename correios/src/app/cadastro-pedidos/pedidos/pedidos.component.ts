import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../../../Common/pedido';
import { CadastroPedidosService } from '../cadastro-pedidos.service';


@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  public pedidos?: Pedido[];

  constructor(private readonly cadastroPedidosService: CadastroPedidosService) { }

  ngOnInit(): void {
    this.cadastroPedidosService.getPedidos().subscribe((pedidos) => {
      this.pedidos = pedidos;
    })
  }

  cancelarPedido(pedido: Pedido): void {
    this.cadastroPedidosService.cancelarPedido(pedido).subscribe((pedidos) => {
      this.pedidos = pedidos;
    })
  }

}
