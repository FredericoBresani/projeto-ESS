import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../../../Common/pedido';
import { EnvioDePacotesService } from '../envio-de-pacotes.service'
import { CadastroPedidosService } from '../../cadastro-pedidos/cadastro-pedidos.service'

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.scss']
})
export class EnviosComponent implements OnInit {

  public pedidos?: Pedido[];

  constructor(
    private readonly envioDePacotesService: EnvioDePacotesService
  ) { }

  ngOnInit(): void {
    this.envioDePacotesService.getPedidos().subscribe((pedidos) => {
      this.pedidos = pedidos;
    })
  }

  cancelarPedido(pedido: Pedido): void {
    this.envioDePacotesService.cancelarPedido(pedido).subscribe((pedidos) => {
      this.pedidos = pedidos;
    })
  }
}
