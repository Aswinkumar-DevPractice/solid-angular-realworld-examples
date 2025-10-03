import { Injectable } from "@angular/core";


interface TransferData{
    fromAccount:string;
    toAccount:string;
    amount:number;
}
@Injectable()
export class TransferValidator{
    validate(data: TransferData): string | null{
        if(!data.fromAccount || !data.toAccount){
            return 'Both accounts are required'
        }
        if(data.fromAccount === data.toAccount){
            return 'From Account and To Account must be different';
        }
        if(data.amount <=0){
            return 'Amount must be greater than zero';
        }
        return null;
    }
}