import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OperacionService } from '../../data-access/operacion.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TransfInternacional } from '../../data-access/transf-internacional';
import { ModalComponent } from '../../../shared/ui/modal/modal.component';

export type TransfCreate = Omit<TransfInternacional, 'idMessage'> ;

@Component({
  selector: 'app-transf-internacional',
  standalone: true,
  imports: [ReactiveFormsModule, ModalComponent],
  templateUrl: './transf-internacional.component.html',
  styleUrl: './transf-internacional.component.scss',
  providers : [OperacionService]
})



export default class TransfInternacionalComponent {

  transf  = {} as TransfInternacional;
  
  pretty : string = "";
  
  private _formBuilder = inject(FormBuilder);
  private _operacionService = inject(OperacionService);
  private _router = inject(Router);

  form = this._formBuilder.group({
    idMessage: this._formBuilder.control(0, Validators.required),
    senderHeader: this._formBuilder.control('', Validators.required),
    accountHeader: this._formBuilder.control('', Validators.required),
    bankOperationCode: this._formBuilder.control('', Validators.required),
    amountInformation: this._formBuilder.control('', Validators.required),
    senderAccount: this._formBuilder.control('', Validators.required),
    senderName: this._formBuilder.control('', Validators.required),
    senderMainAddress: this._formBuilder.control('', Validators.required),
    senderAddressStreet: this._formBuilder.control('', Validators.required),
    senderAddressZone: this._formBuilder.control('', Validators.required),
    senderCity: this._formBuilder.control('', Validators.required),
    senderCountryName: this._formBuilder.control('', Validators.required),
    senderCountryCode: this._formBuilder.control('', Validators.required),
    orderingAccount: this._formBuilder.control('', Validators.required),
    orderingName: this._formBuilder.control('', Validators.required),
    intermediateBankId: this._formBuilder.control('', Validators.required),
    intermediateBankName: this._formBuilder.control('', Validators.required),
    intermediateBankAddress: this._formBuilder.control('', Validators.required),
    intermediateBankStreet: this._formBuilder.control('', Validators.required),
    intermediateBankZone: this._formBuilder.control('', Validators.required),
    correspondentBankId: this._formBuilder.control('', Validators.required),
    correspondentBankName: this._formBuilder.control('', Validators.required),
    correspondentBankLocation: this._formBuilder.control('', Validators.required),
    beneficiaryAccount: this._formBuilder.control('', Validators.required),
    beneficiaryName: this._formBuilder.control('', Validators.required),
    beneficiaryMainAddress: this._formBuilder.control('', Validators.required),
    beneficiaryAddressStreet: this._formBuilder.control('', Validators.required),
    beneficiaryAddressZone: this._formBuilder.control('', Validators.required),
    beneficiaryCity: this._formBuilder.control('', Validators.required),
    beneficiaryCountryName: this._formBuilder.control('', Validators.required),
    beneficiaryCountryCode: this._formBuilder.control('', Validators.required),
    senderShortName: this._formBuilder.control('', Validators.required),
    mainReference: this._formBuilder.control('', Validators.required),
    accountType: this._formBuilder.control('', Validators.required),
    detailsCommission: this._formBuilder.control('', Validators.required)
  });



  submit(){
    if(this.form.invalid){
      console.log("No aprobado");
      return;
    }
    else{
      try {
        console.log("aprobado:");
        console.log(this.form.value);
        this._operacionService.insert(this.obtenerDatos());
      } 
      catch (error) {
        
      }
    }


  }
  obtenerDatos() : TransfInternacional {
    return this.form.value  as TransfInternacional;
  }

  JsonToForm()
  {
    const inputElement = document.getElementById("json_text") as HTMLInputElement;
    const jsonObject = JSON.parse(inputElement.value);

    console.log("PROPIEDADES");

    ////Iterar Propiedades objeto
    for(var input in this.form.controls){
      this.form.get(input)?.setValue(jsonObject[input]);
    }
  }

  JsonPretty(event: any)
  {
    const inputElement = document.getElementById("json_text") as HTMLInputElement;
    var obj = JSON.parse(inputElement.value);
    this.pretty = JSON.stringify(obj, undefined, 4);
    inputElement.value = this.pretty;
  }
  

}
