import { Injectable } from "@angular/core";
import { Usuario } from "../../../../Common/Usuario";
import { Observable } from "rxjs";
import { UsuarioClient } from "../shared/client/usuario.client";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor(private readonly usuarioClient: UsuarioClient) {}

  public login(usuario: Usuario): Observable<Usuario> {    
    return  this.usuarioClient.Login(usuario);
  }

  // public logout(user: Usuario): Observable<Usuario> {
  //   return this.pedidoClient.insertPedido(pedido);
  // }

}
