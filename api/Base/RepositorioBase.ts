export abstract class RepositorioBase<T>{
  
  private banco: T[] = [];
  
  adicionar(obj: T): void{
    this.banco.push(obj);
  } 

  buscarTodos(): T[] {
      return this.banco;
  }
  

}
