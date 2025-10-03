import { CommonModule } from "@angular/common";
import { Component, signal, WritableSignal } from "@angular/core";
import { TransferService } from "./transfer.service";
import { TransferValidator } from "./transfer.validator";
import { ActivityLoggerService } from "./activity-logger.service";
import { FormsModule } from "@angular/forms";

@Component({
    selector:'app-transfer',
    standalone:true,
    templateUrl:'./transfer.component.html',
    imports:[CommonModule,FormsModule],
    providers:[TransferService,TransferValidator,ActivityLoggerService]
})
export class TransferComponent{


    fromAccount: WritableSignal<string> = signal('');
    toAccount: WritableSignal<string> = signal('');
    amount: WritableSignal<number> = signal(0);

    message:WritableSignal<string> = signal('');

    constructor(private transferService: TransferService,
        private validator : TransferValidator,
        private logger: ActivityLoggerService
    ){

    }

    onSubmit(event: Event){
        event.preventDefault();

        const transferData = {
            fromAccount: this.fromAccount(),
            toAccount: this.toAccount(),
            amount: this.amount()
        }

        const validationError = this.validator.validate(transferData);
        if(validationError){
            this.message.set(validationError);
            return;
        }
        
        this.transferService.transferFunds(transferData.fromAccount,transferData.toAccount,transferData.amount);
        this.logger.log(
             `Transferred ${transferData.amount} from ${transferData.fromAccount} to ${transferData.toAccount}`
        )
        this.message.set('Transfer successful!');
    }

}