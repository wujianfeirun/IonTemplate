import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsinfoPageRoutingModule } from './newsinfo-routing.module';

import { NewsinfoPage } from './newsinfo.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: NewsinfoPage }])
  ],
  declarations: [NewsinfoPage]
})
export class NewsinfoPageModule {}
