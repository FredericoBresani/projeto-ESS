export interface Pedido {
  numero_cartao: string;

  nome: string;

  nome_pedido: string;

  cpf: string;

  cod_seguranca: number;

  cep: string;

  peso_produto: number;

  data_envio: Date;

  endero_entrega: string;

  preco_total: number;

  opcoes?: string[];
}
