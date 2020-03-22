import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsinfoPageRoutingModule } from './newsinfo-routing.module';

import { NewsinfoPage } from './newsinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsinfoPageRoutingModule
  ],
  declarations: [NewsinfoPage]
})
export class NewsinfoPageModule {}
