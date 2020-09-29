export interface AuthedConnection{
    request(path:string, data:any):Promise<any>
}

export interface ServerConnection{
    request(path:string, data:any):Promise<any>
}