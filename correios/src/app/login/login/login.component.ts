import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm?: FormGroup;
  
  constructor(private readonly formBuilder: FormBuilder, private readonly router: Router) { }

  ngOnInit(): void {
    this.setupForm();
  }

  signIn(): void{    
    let logado = true;
    localStorage.setItem('logado', JSON.stringify(logado));
    this.router.navigate(['correios']);
  }  

  setupForm(): void {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    });
    
  }

}
