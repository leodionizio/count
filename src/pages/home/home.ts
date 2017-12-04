import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MonthModel } from './../../models/month.model'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public saldo: number = 1200.00;

  public months: MonthModel[] = [
    { idMonth: 1, descriptionMonth: 'Janeiro' },
    { idMonth: 2, descriptionMonth: 'Fevereiro' },
    { idMonth: 3, descriptionMonth: 'Março' },
    { idMonth: 4, descriptionMonth: 'Abril' },
    { idMonth: 5, descriptionMonth: 'Maio' },
    { idMonth: 6, descriptionMonth: 'Junho' },
    { idMonth: 7, descriptionMonth: 'Julho' },
    { idMonth: 8, descriptionMonth: 'Agosto' },
    { idMonth: 8, descriptionMonth: 'Setembro' },
    { idMonth: 9, descriptionMonth: 'Outubro' },
    { idMonth: 10, descriptionMonth: 'Novembro' },
    { idMonth: 11, descriptionMonth: 'Dezembro' }
  ];

  constructor(public navCtrl: NavController) {
    console.log(this.months)
  }

  public pushTo(page: string): void {
    this.navCtrl.push(page);
  }


}
