import { NgModule } from '@angular/core';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { IonicModule } from 'ionic-angular';
import { TypeFinancesComponent } from './type-finances/type-finances';
import { SideMenuComponent } from './side-menu/side-menu';

@NgModule({
	declarations: [
		HeaderMenuComponent,
		TypeFinancesComponent,
		SideMenuComponent
	],
	imports: [IonicModule],
	exports: [
		HeaderMenuComponent,
		TypeFinancesComponent,
		SideMenuComponent
	]
})
export class ComponentsModule {}
