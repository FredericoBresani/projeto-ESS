export class Entrega { 

    codigoProduto:string; 
    codigoVendedor:string;
    data : Date;
    Denominacao : string
   
 
    constructor(_codigoProduto:string , _codigoVendedor:string,data:Date,denominacao :string) { 
       this.codigoProduto = _codigoProduto; 
       this.codigoVendedor = _codigoVendedor;
       this.data = data;
       this.Denominacao = denominacao
    }  

    
 
 
 }