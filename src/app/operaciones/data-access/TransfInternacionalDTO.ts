export class TransfInternacionalDTO
{
    constructor(
        public idMessage: number,
        public senderHeader: string,
        public accountHeader: string,
        public bankOperationCode: string,
        public amountInformation: string,
        public senderAccount: string,
        public senderName: string,
        public senderMainAddress: string,
        public senderAddressStreet: string,
        public senderAddressZone: string,
        public senderCity: string,
        public senderCountryName: string,
        public senderCountryCode: string,
        public orderingAccount: string,
        public orderingName: string,
        public intermediateBankId: string,
        public intermediateBankName: string,
        public intermediateBankAddress: string,
        public intermediateBankStreet: string,
        public intermediateBankZone: string,
        public correspondentBankId: string,
        public correspondentBankName: string,
        public correspondentBankLocation: string,
        public beneficiaryAccount: string,
        public beneficiaryName: string,
        public beneficiaryMainAddress: string,
        public beneficiaryAddressStreet: string,
        public beneficiaryAddressZone: string,
        public beneficiaryCity: string,
        public beneficiaryCountryName: string,
        public beneficiaryCountryCode: string,
        public senderShortName: string,
        public mainReference: string,
        public accountType: string,
        public detailsCommission: string
    )
    {

    }
}