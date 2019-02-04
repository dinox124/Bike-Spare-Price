import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TyrePage } from '../pages/tyre/tyre';
import { HomePage } from '../pages/home/home';
import { PluglistPage } from '../pages/pluglist/pluglist';
import { ListPage } from '../pages/list/list';
import { AirPage } from '../pages/air/air';
import { HeadPage } from '../pages/head/head';
import { TubePage } from '../pages/tube/tube';
import { SidePage } from '../pages/side/side';
import { WheelPage } from '../pages/wheel/wheel';
import { CorporatorPage } from '../pages/corporator/corporator';
import { SilencerPage } from '../pages/silencer/silencer';
import { ChainPage } from '../pages/chain/chain';
@Component({

  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'tyre', component: TyrePage },
      { title: 'spark plug', component: PluglistPage },
      { title: 'air filter', component: AirPage },
      { title: ' head light assembly', component: HeadPage},
      { title: 'tube', component: TubePage },
      { title: ' side mirror', component: SidePage },
      { title: 'wheel rim', component: WheelPage },
      { title: 'corporator', component: CorporatorPage },
      { title: 'silencer gasket', component: SilencerPage },
      { title: 'chain bracket', component: ChainPage }

  

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
