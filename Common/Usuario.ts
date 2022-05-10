
export class Usuario {
    nick: string;
  
    senha: string;

    auth: boolean;

    token: string;

    role: string;

    constructor(nick:string , senha:string, auth:boolean, token:string, role :string) { 
      this.nick = nick; 
      this.senha = senha;
      this.auth = auth;
      this.token = token;
      this.role = role;
   }  

  }
  