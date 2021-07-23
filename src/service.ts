import {AuthedConnection} from './request';
import {TokenProvider} from './token';
import Connection from "./connection";

export default class Service implements AuthedConnection
{
    private connection:Connection;
    
    constructor(public name:string, 
        public endpoint:string, 
        private tokenP: TokenProvider)
        {
            this.connection = new Connection(endpoint)
        }
        
     public async request(path: string, data:any={})
     {
        try{
            const token = await this.tokenP.getJWTAccessToken()
            if(token === ""){
                Promise.reject(new Error("Failed logging in ") )
            }
            
            console.log("axios request ...")
            const opts = { headers:{Authorization: `Bearer ${token}` } }
            
            const resp = await this.connection.request(path, {...opts, ...data})  
            return resp;          
        }catch(err){
            throw err
        }
    }
    
}