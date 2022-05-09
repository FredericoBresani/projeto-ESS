import { Pedido } from "../../Common/pedido";
import { PedidoRepositorio } from "./pedido.repository";

export class PedidoService {
  private pedidoRepositorio: PedidoRepositorio = new PedidoRepositorio();

  buscarTodos(): Pedido[]{
    return this.pedidoRepositorio.buscarTodos();
  }

  cadastrar(pedido: Pedido): Pedido {
    return this.pedidoRepositorio.adicionar(pedido);
  }

  buscar(pedido: Pedido): Pedido {
    return this.pedidoRepositorio.buscar(pedido);
  }

  atualizar(pedido: Pedido): Pedido {
    return this.pedidoRepositorio.atualizar(pedido);
  }

  deletar(pedido: Pedido): Pedido[] {
    return this.pedidoRepositorio.deletar(pedido);
  }

}