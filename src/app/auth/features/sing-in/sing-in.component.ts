import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators  } from '@angular/forms';
import { AuthService } from '../../data-access/auth.service';
import { Router, RouterLink } from '@angular/router';
import { ErrorAuthEnEs, hasEmailError, isRequired } from '../../utils/validator';
import { toast } from 'ngx-sonner';
import { FirebaseError } from '@angular/fire/app';
import { GoogleButtonComponent } from '../../ui/google-button/google-button.component';


interface FormSingIn{
  email : FormControl<string | null >;
  password : FormControl<string | null >;
}

@Component({
  selector: 'app-sing-in',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, GoogleButtonComponent],
  templateUrl: './sing-in.component.html',
  styles: ``
})
export default class SingInComponent {

  private  _formBBuilder = inject(NonNullableFormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);

  isRequired(field: 'email' | 'password'){
    return isRequired(field, this.form)
  }

  hasEmailError(){
    return hasEmailError(this.form);
  }

  form = this._formBBuilder.group<FormSingIn>({
    email : this._formBBuilder.control('', [Validators.required, Validators.email]),
    password : this._formBBuilder.control('', Validators.required)
  })


  async submit(){
    if(this.form.invalid) return;

    try {
      const { email , password } = this.form.value;
    
      if(!email || !password) return;
  
      console.log({email, password})
  
      await this._authService.singIn({email, password});
      toast.success(`Hola nuevamente ${email}`);
      this._router.navigateByUrl('/tasks');
    } 
    catch (error: FirebaseError | any) {
      console.error(error);
      toast.error(`ERROR: \n  ${ErrorAuthEnEs(error.code)}`);
    }

    // const email = this.form.get('email')?.value

  }

  async submitWithGoogle(){
    try {
      alert("inciando sesion con google");
      await this._authService.signInWithGoogle();
      toast.success('Bienvenido de nuevo');
      this._router.navigateByUrl('/tasks');
    } 
    catch (error : FirebaseError | any) {
      console.error(error);
      toast.error(`ERROR: \n  ${ErrorAuthEnEs(error.code)}`);
    }
  }
}
