import { inject, Injectable } from '@angular/core';
import { Auth , createUserWithEmailAndPassword , signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider} from '@angular/fire/auth';

export interface User{
  email : string,
  password : string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth = inject(Auth);
  

  signUp(user : User){
    return createUserWithEmailAndPassword(this._auth, user.email, user.password);
  }

  singIn(user : User){
    return signInWithEmailAndPassword(this._auth, user.email, user.password)
  }

  signInWithGoogle(){
    const provider = new GoogleAuthProvider()

    ////Para que no se seleccione la cuenta de google por defecto en tu navegador y te de chance de seleccionar o registrar una nueva cuenta de google
    // provider.setCustomParameters({ prompt: 'select_account' });

    return signInWithPopup(this._auth, provider);
  }
}
