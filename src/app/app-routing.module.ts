import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home',  loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'vaga', loadChildren: './vaga/list/list.module#ListPageModule' },
  { path: 'usuario', loadChildren: './usuario/list/list.module#ListPageModule' },  
  { path: 'ocupacao', loadChildren: './ocupacao/ocupacao.module#OcupacaoPageModule' },
  { path: 'movimento', loadChildren: './movimento/movimento.module#MovimentoPageModule' },
  { path: 'desocupacao', loadChildren: './desocupacao/list/list.module#ListPageModule' },
  { path: 'desocupacao-add', loadChildren: './desocupacao/add/desocupacao.module#DesocupacaoPageModule' },
  { path: 'configuracao', loadChildren: './configuracao/list/list.module#ListPageModule' },
  { path: 'configuracao-add', loadChildren: './configuracao/add/config.module#ConfigPageModule' },
  { path: 'vaga-add', loadChildren: './vaga/add/vaga.module#VagaPageModule' },
  { path: 'usuario-add', loadChildren: './usuario/add/usuario.module#UsuarioPageModule' },
  { path: 'inicial', loadChildren: './inicial/inicial.module#InicialPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
