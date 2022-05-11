import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pedido } from "../models/pedido.model";
import { environment } from "../../../environments/environment";
import { HttpParams, HttpParamsOptions, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class RequestService {

  public pedidos: Pedido[] = [];

  constructor (private readonly httpClient: HttpClient) {} // httpClient, será usado para requisições http ao servidor

  get<T>(endPoint: string, params?: any, headers?: any): Observable<T[]> {
    return this.httpClient.get<T[]>(`${environment.API_URL}/${endPoint}`, {
      params: new HttpParams({fromObject: params} as HttpParamsOptions),
      headers: new HttpHeaders(headers),
    });
  }

  post<T>(endPoint: string, body: T): Observable<T> {
    return this.httpClient.post<T>(`${environment.API_URL}/${endPoint}`, body);
  }

  put<T>(endPoint: string, body: T): Observable<T> {
    return this.httpClient.put<T>(`${environment.API_URL}/${endPoint}`, body);
  }

  delete<T>(endPoint: string, body: any): Observable<T> {
    return this.httpClient.delete<T>(`${environment.API_URL}/${endPoint}`, {
      params: new HttpParams({fromObject: body} as HttpParamsOptions)
    });
  }
}
