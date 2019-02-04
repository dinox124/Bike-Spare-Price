import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PluglistPage } from '../pages/pluglist/pluglist';
import { AirPage } from '../pages/air/air';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TyrePage } from '../pages/tyre/tyre';
import { HeadPage } from '../pages/head/head';
import { TubePage } from '../pages/tube/tube';
import { SidePage } from '../pages/side/side';
import { WheelPage } from '../pages/wheel/wheel';
import { CorporatorPage } from '../pages/corporator/corporator';
import { SilencerPage } from '../pages/silencer/silencer';
import { ChainPage } from '../pages/chain/chain';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TyrePage,
    PluglistPage,
    AirPage,
    HeadPage,
    TubePage,
    SidePage,
    WheelPage,
    CorporatorPage,
    SilencerPage, 
    ChainPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TyrePage,
    PluglistPage,
    AirPage,
    HeadPage,
    TubePage,
    SidePage,
    WheelPage,
    CorporatorPage,
    SilencerPage,
    ChainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
