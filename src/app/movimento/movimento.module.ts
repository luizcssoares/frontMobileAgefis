import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MovimentoPage } from './movimento.page';
import { MovimentoService } from '../service/movimento.service';

const routes: Routes = [
  {
    path: '',
    component: MovimentoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    MovimentoService
  ],
  declarations: [MovimentoPage]
})
export class MovimentoPageModule {}
