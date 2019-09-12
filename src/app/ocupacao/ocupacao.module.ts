import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OcupacaoPage } from './ocupacao.page';
import { VagaService } from '../service/vaga.service';
import { MovimentoService } from '../service/movimento.service';

const routes: Routes = [
  {
    path: '',
    component: OcupacaoPage
  }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    VagaService,
    MovimentoService
  ],
  declarations: [OcupacaoPage]
})
export class OcupacaoPageModule {}
