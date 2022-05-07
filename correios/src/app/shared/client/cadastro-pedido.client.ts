import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pedido } from "../models/pedido.model";
import { RequestService } from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class CadastroPedidoClient {

  private endPoint = 'cadastroPedido';
  constructor(private readonly requestService: RequestService) {}

  insertPedido(pedido: Pedido): Observable<Pedido> {
    return this.requestService.insertPedido(this.endPoint ,pedido);
  }

  getPedidos(): Observable<Pedido[]> {
    return this.requestService.get(this.endPoint);
  }
}
