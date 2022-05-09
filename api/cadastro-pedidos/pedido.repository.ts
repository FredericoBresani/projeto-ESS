import { RepositorioBase } from "../Base/RepositorioBase";
import { Pedido } from "../../Common/pedido";

export class PedidoRepositorio extends RepositorioBase<Pedido>{

  private pedidoBanco: Pedido[] = [];

  adicionar(obj: Pedido): Pedido {
    this.pedidoBanco.push(obj);
    return this.buscar(obj);
  } 

  buscarTodos(): Pedido[] {
      return this.pedidoBanco;
  }

  buscar(obj: Pedido): Pedido {
      const index = this.pegarIndexObjeto(obj);
      return this.pedidoBanco[index];
  }
  
  atualizar(obj: Pedido): Pedido {
    const index = this.pegarIndexObjeto(obj);
    this.pedidoBanco[index] = Object.assign(this.pedidoBanco[index], obj);
    return this.pedidoBanco[index];
  }

  deletar(obj: Pedido): Pedido[] {
    const index = this.pegarIndexObjeto(obj);
    if (index !== -1){
      this.pedidoBanco.splice(index, 1);
    }
    return this.pedidoBanco;
  }

  pegarIndexObjeto(obj: Pedido): number {
    const index = this.pedidoBanco.findIndex((element) => 
      (element.nome_pedido == obj.nome_pedido) && 
      (element.preco_total == obj.preco_total) && 
      (element.peso_produto == obj.peso_produto) && 
      (element.opcoes == obj.opcoes)
    );
    return index;
  }
}