import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PluglistPage } from '../pluglist/pluglist';
import { ListPage } from '../list/list';
import { TyrePage } from '../tyre/tyre';
import { SidePage } from '../side/side';
import { CorporatorPage } from '../corporator/corporator';
import { SilencerPage } from '../silencer/silencer';
import { ChainPage } from '../chain/chain';
import { AirPage } from '../air/air';
import { HeadPage } from '../head/head';
import { WheelPage } from '../wheel/wheel';
import { TubePage } from '../tube/tube';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  business: any;
  tiles: any[][] = [
    [
      { title: 'Spark plug', icon: 'cog', component: PluglistPage },

      { title: 'Tyre', icon: 'cart', component: TyrePage}
    ],
    [
      { title: 'Ait filter', icon: 'book',  component: AirPage},
      { title: 'Head light assembly', icon: 'book', component: HeadPage }
    ]
    ,
    [
      { title: 'Tube', icon: 'book', component: TubePage },
      { title: 'Side Mirror', icon: 'book', component: SidePage}
    ],
    [
      { title: 'Wheel rim', icon: 'book', WheelPage },
      { title: 'Corporator', icon: 'book', component: CorporatorPage }
    ],
    [
      {
        title: 'Silencer Gasket', icon: 'book', component: SilencerPage },
      { title: 'Chain Bracket', icon: 'book',  component: ChainPage}

    ]
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  navigateTo(tile: any) {
    this.navCtrl.push(tile.component);
    console.log(tile);
  }
}
