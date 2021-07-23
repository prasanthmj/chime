import { RemoteConnection } from './request';
import { TokenProvider } from './token';
export default class Service implements RemoteConnection {
    name: string;
    endpoint: string;
    private tokenP?;
    private connection;
    constructor(name: string, endpoint: string, tokenP?: TokenProvider | undefined);
    request(path: string, data?: any): Promise<any>;
}
