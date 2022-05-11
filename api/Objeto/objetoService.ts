import { Objeto } from "../../Common/Objeto";
import { ObjetoRepositorio } from "./ObjetoRepositorio";

export class ObjetoService{
    private  objetoRepositorio  : ObjetoRepositorio  = new  ObjetoRepositorio();

    cadastrar(obj : Objeto ){
      this.objetoRepositorio.adicionar(obj);
    }

    buscarTodos() : Objeto[]{
      return this.objetoRepositorio.buscarTodos();
    }

    buscarAbertos() : Objeto[]{
      return this.objetoRepositorio.buscarTodos().filter(el => el.status == "ABERTO")
    }

    
    buscarEmpacotados() : Objeto[]{
      return this.objetoRepositorio.buscarTodos().filter(el => el.status == "EMPACOTANDO")
    }

    trocarStatus(codigo : string,status:string):Objeto{
      var obj = this.buscarTodos().filter(el => el.codigo === codigo)[0];
      this.objetoRepositorio.banco = this.objetoRepositorio.banco.filter(el => el.codigo != codigo);
      obj.status = status;
      this.objetoRepositorio.adicionar(obj);
      return obj;
    }

    fecharEntrega():void{    
     this.objetoRepositorio.banco.forEach(item => {
       if(item.status == "EMPACOTANDO"){
         item.status = "FINALIZADO"
       }
      })
    }

}