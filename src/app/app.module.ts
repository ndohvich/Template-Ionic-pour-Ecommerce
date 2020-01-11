import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailsPage } from '../pages/details/details';
import { StarRatingModule } from 'ionic3-star-rating';
import { MenuPage } from '../pages/menu/menu';
import {IonicStorageModule} from "@ionic/storage";
import { CartPage } from '../pages/cart/cart';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    MenuPage,
    CartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    StarRatingModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage,
    MenuPage,
    CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
