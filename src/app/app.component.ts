import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RequestOptions } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from './../pages/tabs/tabs';
import { ConsultaPage } from './../pages/consulta/consulta';
import { HomePage } from './../pages/home/home';
import { LoginPage } from './../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import { AboutPage } from './../pages/about/about';


@Component({
  templateUrl: 'app.html'
})


export class ComponentInicial {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = LoginPage;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public requestOptions: RequestOptions,
    private cookieService: CookieService
  ) {

    this.initializeApp()


    if (this.cookieService.getObject("usuarioAtual")) {
      this.requestOptions.headers.set('Authorization', "Bearer " + this.cookieService.get("accessToken"));
      this.rootPage = TabsPage;
    } else {
      this.rootPage = LoginPage;
    }

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  initializeApp() {
     this.platform.ready().then(() => {
       this.statusBar.styleDefault();
       this.splashScreen.hide();
     });
   }



   openPerfil() {
     this.nav.setRoot(PerfilPage);
   }


   openHome() {
     this.nav.setRoot(HomePage);
   }


}
