import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConfigPage } from './config.page';
import { ConfigService } from '../../service/config.service';

const routes: Routes = [
  {
    path: '',
    component: ConfigPage
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
    ConfigService
  ],
  declarations: [ConfigPage]
})
export class ConfigPageModule {}
