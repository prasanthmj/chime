import User from './user';
import { AuthedConnection, ServerConnection } from './request';
import { LoginObserver } from './observer';
export default class Chimes {
    private connection;
    user: User | null;
    private interestedLogin;
    constructor(api_url?: string, aud?: string);
    get loggedIn(): boolean;
    signup(email: string, password: string, data?: {}): Promise<any>;
    resetPassword(token: string, password: string): Promise<any>;
    forgot(email: string): Promise<any>;
    updateEmail(token: string): Promise<any>;
    confirm(code: string): Promise<any>;
    letMeKnow(me: LoginObserver): void;
    login(email: string, password: string): Promise<{
        ok: boolean;
    }>;
    logout(): void;
    private initUser;
    externalLoginRedirect(provider: string): void;
    handleExternalLogin(ticket: string): Promise<User>;
    getAuthConnection(): AuthedConnection | null;
    getService(name: string): AuthedConnection | null;
    getServerConnection(): ServerConnection;
}
