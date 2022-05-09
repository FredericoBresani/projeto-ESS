import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pedido } from "../shared/models/pedido.model";
import { PedidoClient } from "../shared/client/pedido.client";

@Injectable({
  providedIn: 'root'
})
export class CadastroPedidosService {
  constructor(private readonly pedidoClient: PedidoClient) {}

  public getPedidos(): Observable<Pedido[]> {
    return this.pedidoClient.getPedidos();
  }

  public insertPedido(pedido: Pedido): Observable<Pedido> {
    return this.pedidoClient.insertPedido(pedido);
  }

  public atualizarPedido(pedido: Pedido): Observable<Pedido> {
    return this.pedidoClient.atualizarPedido(pedido);
  }

  public cancelarPedido(pedido: Pedido): Observable<Pedido[]> {
    return this.pedidoClient.cancelarPedido(pedido);
  }
}
