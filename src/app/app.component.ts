import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [        
    {
      title: 'Home',
      url: '/inicial',
      icon: 'home'
    },
    {
      title: 'Vaga',
      url: '/vaga',
      icon: 'flag'
    },
    {
      title: 'Usuario',
      url: '/usuario',
      icon: 'person-add'
    },
    {
      title: 'Ocupacao',
      url: '/ocupacao',
      icon: 'return-right'
    },
    {
      title: 'Desocupacao',
      url: '/desocupacao',
      icon: 'return-left'
    },
    {
      title: 'Movimentos',
      url: '/movimento',
      icon: 'repeat'
    },
    {
      title: 'Configuracao',
      url: '/configuracao',
      icon: 'settings'
    },
    {
      title: 'Sair',
      url: '/logout',
      icon: 'exit'
    }
  ];

  constructor(
    private router : Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      //this.router.navigateByUrl('login');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
   
}
