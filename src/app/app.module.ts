import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';

import { ComponentsModule } from './../components/components.module';
import { MyApp } from './app.component';
import { SqliteConnService } from '../providers/sqlite-conn/sqlite-conn.service';
import { IncomeService } from '../providers/income/income.service';
import { SpentService } from '../providers/spent/spent.service';
import { CategoryService } from '../providers/category/category.service';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp, {
      mode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    SqliteConnService,
    IncomeService,
    SpentService,
    CategoryService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
