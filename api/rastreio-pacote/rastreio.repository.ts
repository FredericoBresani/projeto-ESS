import { RepositorioBase } from "../Base/RepositorioBase";
import { Pedido } from "../../Common/pedido";


export class RastreioRepositorio extends RepositorioBase<Pedido>{
    
    private rastreioBanco: Pedido[] = [];

    buscarTodos(): Pedido[] {
        return this.rastreioBanco;
    }

}