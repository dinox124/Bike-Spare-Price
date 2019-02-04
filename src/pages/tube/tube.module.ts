import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TubePage } from './tube';

@NgModule({
  declarations: [
    TubePage,
  ],
  imports: [
    IonicPageModule.forChild(TubePage),
  ],
})
export class TubePageModule {}
