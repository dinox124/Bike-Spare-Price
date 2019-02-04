import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CorporatorPage } from './corporator';

@NgModule({
  declarations: [
    CorporatorPage,
  ],
  imports: [
    IonicPageModule.forChild(CorporatorPage),
  ],
})
export class CorporatorPageModule {}
