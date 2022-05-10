import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Usuario } from '../../../../../Common/Usuario'
import {LoginService} from '../login.service'
import { MatDialog } from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

  public loginForm?: FormGroup;

  

  constructor(
    private readonly formBuilder: FormBuilder, 
    private readonly router: Router, 
    private readonly loginService: LoginService,
    public dialog: MatDialog
  ) { }
  
  ngOnInit(): void {
    this.setupForm();
    window.document.querySelector('title')!.innerHTML! = "Login";
  }

  ngOnDestroy(): void {
    window.document.querySelector('title')!.innerHTML! = "Correios";
  }

  signIn(): void{   
    
    let user =  this.loginForm?.controls['usuario'].value;    
    let password =  this.loginForm?.controls['senha'].value;
    
    var userLogin = new Usuario(user, password,false, "","");
    
    
    this.loginService.login(userLogin).subscribe((usuario) => {      
      if (usuario.auth) {
        localStorage.setItem('USUARIO', JSON.stringify(usuario));
        this.router.navigate([`correios`]);
        console.log("entrou");
      }
      else{
        this.openDialog();
      }
    })    
    
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }

  setupForm(): void {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    });

  }

}
