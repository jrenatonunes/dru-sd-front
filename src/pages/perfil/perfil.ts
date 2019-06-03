import { PerfilServiceProvider } from './../../providers/perfil-service/perfil-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';
import { RequestOptions } from '@angular/http';
import { LoginServiceProvider } from './../../providers/login-service/login-service';
import { HomePage } from './../home/home';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'perfil-page',
  templateUrl: 'perfil.html',
  providers: [PerfilServiceProvider]
})
export class PerfilPage {
  public perfis: any;
  constructor(public navCtrl: NavController, public perfilService: PerfilServiceProvider) {

  }

  ionViewWillEnter() {
    this.perfis = [];
    this.perfilService.getPerfis().subscribe(
      response => this.perfis = response
    );
    console.log("Perfis = " + this.perfis);
  }

}
