import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SilencerPage } from './silencer';

@NgModule({
  declarations: [
    SilencerPage,
  ],
  imports: [
    IonicPageModule.forChild(SilencerPage),
  ],
})
export class SilencerPageModule {}
