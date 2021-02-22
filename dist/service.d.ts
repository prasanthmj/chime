import { AuthedConnection } from './request';
import { TokenProvider } from './token';
export default class Service implements AuthedConnection {
    name: string;
    endpoint: string;
    private tokenP;
    private connection;
    constructor(name: string, endpoint: string, tokenP: TokenProvider);
    request(path: string, data?: any): Promise<any>;
}
