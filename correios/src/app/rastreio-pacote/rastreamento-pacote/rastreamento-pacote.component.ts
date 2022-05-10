import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../../../Common/pedido';
import { CadastroPedidosService } from 'src/app/cadastro-pedidos/cadastro-pedidos.service';
@Component({
  selector: 'app-rastreamento-pacote',
  templateUrl: './rastreamento-pacote.component.html',
  styleUrls: ['./rastreamento-pacote.component.scss']
})
export class RastreamentoPacoteComponent implements OnInit {

  public pedidos?: Pedido[];

  constructor(
    private readonly cadastroPedidosService: CadastroPedidosService,
  ) { }

  ngOnInit(): void {
    this.cadastroPedidosService.getPedidos().subscribe((pedidos) => {
      this.pedidos = pedidos;
    })
  }
}
