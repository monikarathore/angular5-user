import { Injectable } from '@angular/core';


@Injectable()
export class SharedService {

    private sToken: string;
    private slbAccountId: string;

    public getStoken() {
        return this.sToken;
    }
    public gettenant() {
        return this.slbAccountId;
    }

    public settenant(slbAccountId: string) {
        this.slbAccountId = slbAccountId;
    }

    public setStoken(_stoken: string) {
        this.sToken = _stoken;
    }
}
