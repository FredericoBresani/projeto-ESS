import { Injectable } from "@angular/core";
import { json } from "express";
import { Observable } from "rxjs";
import {Objeto} from "../../../../../Common/Objeto"

import {Service} from "./service"

@Injectable({
  providedIn: 'root'
})
export class EntregaRequest {

  private endPoint = 'Objeto';
  constructor(private readonly objetoService: Service<Objeto>) {}

  getObjetos(): Observable<Objeto[]> {
    return this.objetoService.get<Objeto>(this.endPoint);
  }

  getOBjetosAbertos(): Observable<Objeto[]> {
    return this.objetoService.get<Objeto>(this.endPoint+"/Aberto");
  }

  getOBjetosEmpacotados(): Observable<Objeto[]> {
    return this.objetoService.get<Objeto>(this.endPoint+"/Empacotado");
  }

  empacotarObjetos(codigo : string):void{
     var  objeto : Objeto = new Objeto(codigo,"ABERTO");
     this.objetoService.post<Objeto>(this.endPoint+"/Empacotar",objeto);
  }

  abrirObjetos(codigo : string):void{
    //this.objetoService.post<Objeto>(this.endPoint+"/Aberto",{ codigo : codigo});
  }


}
