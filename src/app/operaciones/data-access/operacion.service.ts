import { Injectable, inject } from '@angular/core';
import { OperacionesByFechaResponse, TransfInternacional } from './transf-internacional';
import TransfInternacionalComponent, { TransfCreate } from '../features/transf-internacional/transf-internacional.component';
import { HttpClient } from  "@angular/common/http";
import { TransfInternacionalDTO } from './TransfInternacionalDTO';

@Injectable()


export class OperacionService {

  private _httpClient = inject(HttpClient);

  urlBase = 'https://localhost:44350/api/';

  constructor() { }

  insert(value: TransfInternacional) {
    // let url : string = this.urlBase + 'numero';
    // console.log("la url:" + url);
    // this._httpClient.post<number>(url, 5)
    //   .subscribe({
    //     next : response => {
    //         console.log('resultado: ');
    //         console.log(response);
    //     },
    //     error: error => {
    //         console.log('error: ');
    //         console.log(error);
    //     }
    // });

    console.log("insertar:");
    console.log(value);
    

    let valor_casteado = value as TransfInternacionalDTO

    console.log(valor_casteado);

    let url : string = this.urlBase + 'sendMessageDeliverySwift';
    console.log("la url:" + url);
    this._httpClient.post<TransfInternacional>(url, valor_casteado)
      .subscribe({
        next : response => {
            console.log('resultado: ');
            console.log(response);
        },
        error: error => {
            console.log('error: ');
            console.log(error);
        }
    });
  }

  operacionesByFecha(fecha_inicio : string, fecha_fin : string, pagina : number){
    let url : string = "https://localhost:44350/api/OperacionesByFecha/2024-01-01/2024-09-05/1";
    console.log("la url:" + url);
    this._httpClient.get<OperacionesByFechaResponse>(url)
    .subscribe({
      next : response => {
          console.log('resultado: ');
          console.log(response);
      },
      error: error => {
          console.log('error: ');
          console.log(error);
      }
  });
  }



  
}
