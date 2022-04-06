import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pedido } from "../models/pedido.model";

@Injectable({
  providedIn: 'root',
})
export class RequestService {

  public pedidos: Pedido[] = [];

  constructor (private readonly httpClient: HttpClient) {} // httpClient, será usado para requisições http ao servidor

  insertPedido(endPoint: string, pedido: Pedido): Observable<Pedido> {
    this.pedidos.push(pedido);
    return new Observable(subscriber => {
      subscriber.next(pedido);
    });
  }

  get(endPoint: string): Observable<Pedido[]> {
    return new Observable(subscriber => {
       subscriber.next(this.pedidos);
    })
  }

  delete(endPoint: string, pedido: Pedido): Observable<Pedido[]> {
    const index = this.pedidos.indexOf(pedido);
    if (index === -1) {
      return new Observable(subscriber => {
        subscriber.error();
      })
    }
    let remaining: Pedido[] = [];
    let indexRemaining = 0;
    this.pedidos.forEach(element => {
      if (indexRemaining !== index) {
        remaining.push(element);
      }
      indexRemaining++;
    });
    this.pedidos = remaining;
    return new Observable(subscriber => {
      subscriber.next(this.pedidos);
    })
  }
}
