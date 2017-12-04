import { Component } from '@angular/core';
import { AlertController, MenuController, App } from 'ionic-angular';
import { BaseComponent } from '../base.component';
import { ItemMenuModel } from '../../models/item-menu.model'

@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuComponent extends BaseComponent {
  public itemsMenu: ItemMenuModel[] = [
    { page: 'HomePage', label: 'Início', icon: 'home' },
    { page: 'NewFinancesPage', label: 'Novo Lançamento', icon: 'md-trending-up' },
    { page: 'CategoriesPage', label: 'Gerenciar Categorias', icon: 'md-trending-up' },
  ]

  constructor(
    public alertCtrl: AlertController,
    public app: App,
    public menuCtrl: MenuController
  ) {
    super(alertCtrl, app, menuCtrl);
  }

  public toPage(page: string): void {
     this.navCtrl.setRoot(page);
  }

}
