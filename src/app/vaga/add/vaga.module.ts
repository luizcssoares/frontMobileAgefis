import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VagaPage } from './vaga.page';
import { VagaService } from 'src/app/service/vaga.service';

const routes: Routes = [
  {
    path: '',
    component: VagaPage
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
    VagaService
  ],
  declarations: [VagaPage]
})
export class VagaPageModule {}
