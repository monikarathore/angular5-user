import { Injectable } from '@angular/core';


@Injectable()
export class SharedService {

    private sToken: string;
    private clientId: string;

    public getStoken() {
        return this.sToken;
    }
    public getClientId() {
        return this.clientId;
    }

    public setClientId(_clientId: string) {
        this.clientId = _clientId;
    }

    public setStoken(_stoken: string) {
        this.sToken = _stoken;
    }
}
