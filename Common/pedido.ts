export interface Pedido {
  numero_cartao: string;

  nome: string;

  nome_pedido: string;

  cpf: string;

  cod_seguranca: number;

  cep: string;

  peso_produto: number;

  endereco_entrega: string;

  data_envio?: Date;

  Data_formatada?: Date;

  tempo_entrega: Date;

  preco_total: number;

  estado_atual:string[];

  opcoes?: string[];
}
