import { Pedido } from "../../Common/pedido";
import { RastreioRepositorio } from "./rastreio.repository";


export class RastreioService {
  
    private rastreioRepositorio: RastreioRepositorio = new RastreioRepositorio();

    buscarTodos(): Pedido[]{
        return this.rastreioRepositorio.buscarTodos();
      }
}