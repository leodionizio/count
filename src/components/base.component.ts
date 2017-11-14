import { NavController, AlertController, App, MenuController } from 'ionic-angular';
import { OnInit } from '@angular/core';

export abstract class BaseComponent implements OnInit {

    protected navCtrl: NavController;

    constructor(
        public alertCtrl: AlertController,
        public app: App,
        public menuCtrl: MenuController
    ) { }

    ngOnInit(): void {
        this.navCtrl = this.app.getActiveNav();
    }
}
