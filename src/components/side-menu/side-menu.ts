import { Component } from '@angular/core';
import { AlertController, MenuController, App } from 'ionic-angular';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuComponent extends BaseComponent {

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public menuCtrl: MenuController
  ) {
    super(alertCtrl, app, menuCtrl);
  }

  public toPage(page: string): void {
    this.navCtrl.push(page)
  }

}
