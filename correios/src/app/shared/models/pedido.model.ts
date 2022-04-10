export interface Pedido {
  numero_cartao: string;

  nome: string;

  nome_pedido: string;

  cpf: string;

  cod_seguranca: number;

  cep: string;

  peso_produto: number;

  endero_entrega: string;

  data_envio: Date;

  tempo_entrega: number;

  preco_total: number;

  opcoes?: string[];
}
