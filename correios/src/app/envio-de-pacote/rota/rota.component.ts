import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../../../../Common/pedido';
import { MatDialog } from '@angular/material/dialog';
import {DialogComponent} from '../../notificacao/dialog/dialog.component';
import { DialogData } from 'src/app/shared/models/dialog-data.model';
import { CadastroPedidosService } from 'src/app/cadastro-pedidos/cadastro-pedidos.service';
import { EnvioDePacotesService } from '../envio-de-pacotes.service';

@Component({
  selector: 'app-rota',
  templateUrl: './rota.component.html',
  styleUrls: ['./rota.component.scss']
})

export class RotaComponent implements OnInit {

  public pedidos?: Pedido[];

  public pedido?: Pedido;

  public dialogData?: DialogData;

  constructor(
    public dialog: MatDialog,
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

  atualizarCaminhoPedido( pedido: Pedido): void {

    if(pedido.endereco_entrega=="PE" ){
      if(pedido.estado_atual[pedido.estado_atual.length-1]=="DF"){
        pedido.estado_atual.push("GO");
        this.dialogData = {pedido: pedido.nome_pedido, estado: 'Goias'}
        this.dialog.open(DialogComponent, {
          data: this.dialogData});
      }
      else if(pedido.estado_atual[pedido.estado_atual.length-1]=="GO"){
        pedido.estado_atual.push("BA");
        this.dialogData = {pedido: pedido.nome_pedido, estado: 'Bahia'}
        this.dialog.open(DialogComponent, {
          data: this.dialogData});
      }
      else if(pedido.estado_atual[pedido.estado_atual.length-1]=="BA"){
        pedido.estado_atual.push("PE");
        this.dialogData = {pedido: pedido.nome_pedido, estado: 'Pernambuco'}
        this.dialog.open(DialogComponent, {
          data: this.dialogData});
      }
    }//SO VAI PRECISAR enviar pedido no paramentro
    this.envioDePacotesService.atualizarPedido(pedido).subscribe((pedidos) => {
      this.pedido = pedidos;
    })
  }

}
