



export interface AuthResponse {
   ok: boolean;
   uidMONGO: string;
   uidSQL: number;
   name: string;
   email: string;
   Mongotoken: string;
   MYSQLToken: string;
   }

   export interface Usuario {
      uidMongo:string;
      uidMySql:number;
      name:string;
      email:string;
   }

 
   export interface RenewResponse{
      ok:boolean;
      msg:string;
      mongoid:string;
      name:string;
      email:string;
      mysqlid:number;
      Mongotoken:string;
      MYSQLToken:string;
   }
