
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "../../../../../Common/Usuario";
import { RequestService } from "./request.service";

@Injectable({
    providedIn: 'root'
})
export class UsuarioClient {

    private endPoint = 'login';
    constructor(private readonly requestService: RequestService) {}    
  
    Login(usuario: Usuario): Observable<Usuario> {      
      return this.requestService.post<Usuario>(this.endPoint, usuario);
    }
    
    // Logout(): Observable<Usuario> {
    //     return this.requestService.post(this.endPoint);
    //   }
  
  }