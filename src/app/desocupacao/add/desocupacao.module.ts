import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DesocupacaoPage } from './desocupacao.page';
import { MovimentoService } from '../../service/movimento.service';
import { IonicStorageModule } from '@ionic/storage';

const routes: Routes = [
  {
    path: '',
    component: DesocupacaoPage
  }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicStorageModule.forRoot()
  ],
  providers: [
    MovimentoService
    //,IonicStorageModule
  ],
  declarations: [DesocupacaoPage]
})
export class DesocupacaoPageModule {}
