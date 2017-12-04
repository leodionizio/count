import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GastoModel } from './../../models/gasto.model';
import { RendaModel } from './../../models/renda.model';
import * as moment from 'moment';

@Component({
  selector: 'type-finances',
  templateUrl: 'type-finances.html'
})
export class TypeFinancesComponent {
  public typeInfo: string = 'gasto';
  private momentNow = moment().format('YYYY/MM/DD');

  public gastosForm: FormGroup = new FormGroup({
    'id': new FormControl(null),
    'description': new FormControl('', Validators.required),
    'value': new FormControl('', Validators.required),
    'date': new FormControl(this.momentNow, Validators.required),
    'parcel': new FormControl(1, Validators.required),
    'category': new FormControl('', Validators.required),
  })

  public rendaForm: FormGroup = new FormGroup({
    'id': new FormControl(null),
    'description': new FormControl('', Validators.required),
    'value': new FormControl('', Validators.required),
    'date': new FormControl(this.momentNow, Validators.required),
    'category': new FormControl('', Validators.required),
  })

  constructor() {
    console.log(this.momentNow)
  }

  public saveData(): void {

    // verifica se o formulario está valido
    if (!this.gastosForm.valid || !this.rendaForm.valid) {
      console.log('formulário inválido')

    } else {
      if (this.typeInfo === 'gasto') {
        let gastos = new GastoModel(
          this.gastosForm.value.id,
          this.gastosForm.value.description,
          this.gastosForm.value.value,
          this.gastosForm.value.date,
          this.gastosForm.value.parcel,
          this.gastosForm.value.category,
        )
        console.log(gastos);
      } else if (this.typeInfo === 'renda') {
        let renda = new RendaModel(
          this.rendaForm.value.id,
          this.rendaForm.value.description,
          this.rendaForm.value.value,
          this.rendaForm.value.date,
          this.rendaForm.value.category,
        )
        console.log(renda);
      }
    }

  }
}
