import { FormGroup } from "@angular/forms";

export const isRequired = (field: 'email' | 'password', form: FormGroup) =>{
    const control = form.get(field);

    return control && control.touched && control.hasError('required');
}

export const hasEmailError = (form : FormGroup) => {
    const control = form.get('email');
    return control && control.touched && control.hasError('email');
}

export const ErrorAuthEnEs = (code : string) => {
    switch(code){
        case 'auth/email-already-in-use':{
            return "El usuario ya esta en uso";
        }
        case 'auth/invalid-credential':{
            return "Error en las credenciales";
        }
        case 'auth/too-many-requests':{
            return "Usuario bloqueado por exceso de intentos";
        }
        default:
            return "ERROR";
    }
}