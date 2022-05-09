export abstract class RepositorioBase<T>{
  
  private banco: T[] = [];
  
  adicionar(obj: T): T {
    return this.buscar(obj);
  } 

  buscarTodos(): T[] {
      return this.banco;
  }

  buscar(obj: T): T {
      const index = this.banco.indexOf(obj);
      return this.banco[index];
  }
  
  atualizar(obj: T): T {
    const index = this.banco.indexOf(obj);
    this.banco[index] = Object.assign(this.banco[index], obj);
    return this.banco[index];
  }

  deletar(obj: T): T[] {
    const index = this.banco.findIndex((element) => element === obj);
    this.banco.splice(index, 1);
    return this.banco;
  }

  pegarIndexObjeto(obj: T): number {
    const index = this.banco.findIndex((element) => element == obj);
    return index;
  }

}
