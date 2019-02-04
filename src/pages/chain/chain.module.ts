import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChainPage } from './chain';

@NgModule({
  declarations: [
    ChainPage,
  ],
  imports: [
    IonicPageModule.forChild(ChainPage),
  ],
})
export class ChainPageModule {}
