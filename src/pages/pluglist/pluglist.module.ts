import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PluglistPage } from './pluglist';

@NgModule({
  declarations: [
    PluglistPage,
  ],
  imports: [
    IonicPageModule.forChild(PluglistPage),
  ],
})
export class PluglistPageModule {}
