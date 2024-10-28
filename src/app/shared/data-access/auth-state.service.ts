import { inject, Injectable } from "@angular/core";
import { Auth, authState, getAuth, signOut } from "@angular/fire/auth";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthStateService {
    private _auth = inject(Auth);

    get authState$() : Observable<any>{
        return authState(this._auth);
    }

    logOut(){
        return signOut(this._auth);
    }

    get currentUser(){
        return getAuth().currentUser;
    }
}