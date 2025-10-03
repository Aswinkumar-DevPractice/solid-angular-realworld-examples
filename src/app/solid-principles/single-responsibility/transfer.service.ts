import { Injectable } from "@angular/core";

@Injectable()
export class TransferService{
    transferFunds(fromAccount: string, toAccount: string, amount: number){
        console.log(`API : Transferring ${amount} from ${fromAccount} to ${toAccount}`)
    }
}