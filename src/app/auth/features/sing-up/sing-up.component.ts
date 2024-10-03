import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms' //para interactuar con los formularios
import { ErrorAuthEnEs, hasEmailError, isRequired } from '../../utils/validator'
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';
import { Router, RouterLink } from '@angular/router';
import { FirebaseError } from '@angular/fire/app';

interface FormSingUp{
  email : FormControl<string | null >;
  password : FormControl<string | null >;
}

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sing-up.component.html',
  styles: ``
})
export default class SingUpComponent {

  private  _formBBuilder = inject(NonNullableFormBuilder);
  private _authService = inject(AuthService);
  private _router = inject(Router);

  isRequired(field: 'email' | 'password'){
    return isRequired(field, this.form)
  }

  hasEmailError(){
    return hasEmailError(this.form);
  }

  form = this._formBBuilder.group<FormSingUp>({
    email : this._formBBuilder.control('', [Validators.required, Validators.email]),
    password : this._formBBuilder.control('', Validators.required)
  })


  async submit(){
    if(this.form.invalid) return;

    try {
      const { email , password } = this.form.value;
    
      if(!email || !password) return;
  
      console.log({email, password})
  
      await this._authService.signUp({email, password});
      toast.success('Usuario creado correctamente');
      this._router.navigateByUrl('/tasks');
    } 
    catch (error: FirebaseError | any) {
      console.error(error);
      toast.error(`ERROR: \n  ${ErrorAuthEnEs(error.code)}`);
    }

    // const email = this.form.get('email')?.value

  }
}
