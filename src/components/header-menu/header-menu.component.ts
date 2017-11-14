import { Component, Input } from '@angular/core';
import { AlertController, App, MenuController } from 'ionic-angular';
import { BaseComponent } from './../base.component';

@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.component.html'
})
export class HeaderMenuComponent extends BaseComponent {
  @Input() public title: string;

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public menuCtrl: MenuController
  ) {
    super(alertCtrl, app, menuCtrl);
  }
}
