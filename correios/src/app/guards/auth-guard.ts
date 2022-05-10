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
    
    
    if(!localStorage.getItem('USUARIO')){
      return  false;
    }
    let isLogado = JSON.parse(localStorage.getItem('USUARIO')!);    
    if(isLogado.auth){
      return true;
    }
    else{
      return false;
      this.router.navigate(['']);
    }    
    
  }
  
}
