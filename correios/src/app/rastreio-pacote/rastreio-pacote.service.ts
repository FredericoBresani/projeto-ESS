import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Pedido } from "../shared/models/pedido.model";
import { PedidoClient } from "../shared/client/pedido.client";

@Injectable({
  providedIn: 'root'
})
export class RastreioPacoteService {

  constructor(private readonly pedidoClient: PedidoClient) {}
  
  public getPedidos(): Observable<Pedido[]> {
    return this.pedidoClient.getPedidos();
  }
}
