export interface TransfInternacional {
     idMessage: number;
     senderHeader: string;
     accountHeader: string;
     bankOperationCode: string;
     amountInformation: string;
     senderAccount: string;
     senderName: string;
     senderMainAddress: string;
     senderAddressStreet: string;
     senderAddressZone: string;
     senderCity: string;
     senderCountryName: string;
     senderCountryCode: string;
     orderingAccount: string;
     orderingName: string;
     intermediateBankId: string;
     intermediateBankName: string;
     intermediateBankAddress: string;
     intermediateBankStreet: string;
     intermediateBankZone: string;
     correspondentBankId: string;
     correspondentBankName: string;
     correspondentBankLocation: string;
     beneficiaryAccount: string;
     beneficiaryName: string;
     beneficiaryMainAddress: string;
     beneficiaryAddressStreet: string;
     beneficiaryAddressZone: string;
     beneficiaryCity: string;
     beneficiaryCountryName: string;
     beneficiaryCountryCode: string;
     senderShortName: string;
     mainReference: string;
     accountType: string;
     detailsCommission: string;
}


export interface OperacionesByFechaResponse {
     Resultados: number
     Listado: Listado[]
   }
   
   export interface Listado {
     operacion1: number
     producto_contratado: number
     operacion_definida: number
     fecha_captura: string
     status_operacion: number
     fecha_operacion: string
     monto_operacion: number
     usuario_captura: number
     usuario_valida: number
     linea: number
     funcionario: number
     contacto?: string
     grabadora: number
     DEPOSITO: any
     DEPOSITO_CED: any
     DEPOSITO_DIRECTO: any
     DEPOSITO_PME: any
     OPERACION_DEFINIDA1: any
     OPERACION_SWIFT: any[]
     OPERACION_PIU: any
   }
   
