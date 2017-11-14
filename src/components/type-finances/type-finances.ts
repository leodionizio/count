import { Component } from '@angular/core';

@Component({
  selector: 'type-finances',
  templateUrl: 'type-finances.html'
})
export class TypeFinancesComponent {
  public typeInfo: string = 'gasto';


  constructor() {
    console.log('Hello TypeFinancesComponent Component');
  }

}
