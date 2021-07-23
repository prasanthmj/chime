import {joinURL} from './chime-utils';
import axios from 'axios';
import qs from 'qs';

export default class Connection
{
    constructor(
        private api_url:string)
    {}  
    
    private fullUrl(path: string){
        return joinURL(this.api_url, path)
    }
    
    public redirectTo(path:string, params:any){
        if(window && window.location){
            window.location.href = this.fullUrl(path)+"?"+qs.stringify(params)    
        }
    }
    
    public async request(path:string, options:any){
        console.log("axios request 2 ...")
        const defaults = { url: this.fullUrl(path), withCredentials: true }
        return axios({...options, ...defaults})
                    .then((resp)=>
                    {
                        return Promise.resolve(resp.data)
                    })
                    .catch((err)=>{
                        return Promise.reject(err.response.data)    
                    })
        
    }
        
}