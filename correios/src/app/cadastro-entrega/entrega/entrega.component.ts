import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import  {Entrega } from "../../../../../Common/Entrega";
import { EntregaRequest } from '../../../app/shared/Entrega/entrega.request';
import { Objeto } from '../../../../../Common/Objeto';
@Component({
  selector: 'app-entrega',
  templateUrl: './entrega.component.html',
  styleUrls: ['./entrega.component.scss']
})
export class EntregaComponent implements OnInit {

  constructor(private readonly entregaRequest: EntregaRequest) { }

  entregas : Entrega[] = [];
  objetoAberto: Objeto[] = [];
  objetoEmpacotado: Objeto[] = [];

   
  async refreshAllget(){
    console.log("refresh");
   await this.entregaRequest.getOBjetosAbertos().subscribe((objetos) => {
      this.objetoAberto = objetos;
   });

    await  this.entregaRequest.getOBjetosEmpacotados().subscribe((objetos) =>{
    this.objetoEmpacotado = objetos;
   });

  }
  
  ngOnInit(): void {

    this.refreshAllget();

  }
 

  fecharPedidos():void {
    alert("Objetos em rota de entrega.");
  }

  adicionarObjetoEntrega(codigo:string){
    this.entregaRequest.empacotarObjetos(codigo);
    this.refreshAllget();
  }
  
  removerOBjetoEmpacotamento(codigo:string){
    this.entregaRequest.abrirObjetos(codigo);
    this.refreshAllget();
  }

  fecharEntrega(){
    this.entregaRequest.fecharentrega();
    this.refreshAllget();
  }




}
