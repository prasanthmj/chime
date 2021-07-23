import User from './user';
import { RemoteConnection } from './request';
import { LoginObserver } from './observer';
export default class Chimes {
    private auth_connection;
    user: User | null;
    private interestedLogin;
    constructor(auth_url?: string, aud?: string);
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
    getService(name: string, endpoint: string): RemoteConnection;
    getAuthService(): RemoteConnection | null;
    getAPIService(name: string): RemoteConnection | null;
}
