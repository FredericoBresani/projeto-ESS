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

}