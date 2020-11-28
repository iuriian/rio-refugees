import { Injectable } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Injectable({
  providedIn: 'root'
})
export class CallsService {

  constructor(private callNumber: CallNumber) { }

  public call(numberCall: string){
    this.callNumber.callNumber(numberCall, true)
    .then(res => console.log('Chamada Aberta!', res))
    .catch(err => console.log('Error launching chamada', err));
  }
}
