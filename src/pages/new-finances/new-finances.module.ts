import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewFinancesPage } from './new-finances';
import { ComponentsModule } from './../../components/components.module'
// import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    NewFinancesPage,
  ],
  imports: [
    ComponentsModule,
    // IonicModule,
    IonicPageModule.forChild(NewFinancesPage),
  ],
})
export class NewFinancesPageModule {}
