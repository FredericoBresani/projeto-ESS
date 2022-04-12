import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import  {Entrega } from "../../../../../Common/Entrega";
@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.scss']
})
export class EntregaComponent implements OnInit {

  constructor(private readonly formBuilder: FormBuilder) { }

  entregas : Entrega[] = [];

  public cadastroForm2 = new FormGroup({
    codigoProduto: new FormControl(''),
    codigoEntregador: new FormControl(''),
  });

  ngOnInit(): void {

  
  }
  
  fecharPedidos():void {
    alert("Objetos em rota de entrega.");
  }

  limparForm():void{
    this.cadastroForm2?.patchValue({
      codigoProduto : '',
      codigoEntregador : ''
    });
  }
  onSubmit(): void {
    let codigoProduto =  this.cadastroForm2?.controls['codigoProduto'].value;
    let codigoEntregador =  this.cadastroForm2?.controls['codigoEntregador'].value;

    this.entregas.push( new Entrega(codigoProduto,codigoEntregador));

    this.limparForm();
  }

}
