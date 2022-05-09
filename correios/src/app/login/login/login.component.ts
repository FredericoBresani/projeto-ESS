import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm?: FormGroup;

  constructor(private readonly formBuilder: FormBuilder, private readonly router: Router) { }

  ngOnInit(): void {
    this.setupForm();
    window.document.querySelector('title')!.innerHTML! = "Login";
  }

  ngOnDestroy(): void {
    window.document.querySelector('title')!.innerHTML! = "Correios";
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
