import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { ComponentsModule } from './../../components/components.module'
// import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    ComponentsModule,
    // IonicModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
