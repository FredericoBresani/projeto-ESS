import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pedido } from "../models/pedido.model";
import { RequestService } from "./request.service";

@Injectable({
  providedIn: 'root'
})
export class EnvioClient {

  private endPoint = 'pedido';
  constructor(private readonly requestService: RequestService) {}

  getEnvios(): Observable<Pedido[]> {
    return this.requestService.get(this.endPoint);
  }

  cancelarPedido(pedido: Pedido): Observable<Pedido[]> {
    return this.requestService.delete(this.endPoint, pedido);
  }
}
