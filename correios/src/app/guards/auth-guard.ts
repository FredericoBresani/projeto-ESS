import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
;

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly router: Router) { }
  canActivate(): boolean  {
    let isLogado = JSON.parse(localStorage.getItem('logado')!);
    
    if(!isLogado){
      this.router.navigate(['']);
    }
    
    return true;
  }
  
}
