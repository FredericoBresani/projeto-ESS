import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pedido } from "../../../../../Common/pedido";
import { RequestService } from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class PedidoClient {

  private endPoint = 'pedidos';
  constructor(private readonly requestService: RequestService) {}

  getPedidos(): Observable<Pedido[]> {
    return this.requestService.get(this.endPoint);
  }

  insertPedido(pedido: Pedido): Observable<Pedido> {
    return this.requestService.post(this.endPoint, pedido);
  }

  cancelarPedido(pedido: Pedido): Observable<Pedido[]> {
    return this.requestService.delete<Pedido[]>(this.endPoint, pedido);
  }

  atualizarPedido(pedido: Pedido): Observable<Pedido> {
    return this.requestService.put<Pedido>(this.endPoint, pedido);
  }
}
