import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HttpParams, HttpParamsOptions, HttpHeaders } from "@angular/common/http";
import { json } from "express";

const axios = require('axios').default;

@Injectable({
  providedIn: 'root',
})
export class Service<T>{
  
  constructor (private readonly httpClient: HttpClient) {
    
  } // httpClient, será usado para requisições http ao servidor



  get<T>(endPoint: string, params?: any, headers?: any): Observable<T[]> {
    return this.httpClient.get<T[]>(`${environment.API_URL}/${endPoint}`, {
      params: new HttpParams({fromObject: params} as HttpParamsOptions),
      headers: new HttpHeaders(headers),
    });
  }

 
  post<T>(endPoint: string, body: T): void {
      console.log("passou post");
      return axios.post(`${environment.API_URL}/${endPoint}`,body);
  }

  postSemObj<T>(endPoint: string): void {
    return axios.post(`${environment.API_URL}/${endPoint}`);
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
