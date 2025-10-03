import { Injectable } from "@angular/core";

@Injectable()
export class ActivityLoggerService{
    log(message:string){
        console.log('Activity log:',message);
    }
}