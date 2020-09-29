export default class Connection {
    private api_url;
    constructor(api_url: string);
    private fullUrl;
    redirectTo(path: string, params: any): void;
    request(path: string, options: any): Promise<any>;
}
