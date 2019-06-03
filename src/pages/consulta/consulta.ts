import { ConsultaServiceProvider } from './../../providers/consulta-service/consulta-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from './../tabs/tabs';
import { RequestOptions } from '@angular/http';
import { LoginServiceProvider } from './../../providers/login-service/login-service';
import { HomePage } from './../home/home';
import { FormBuilder } from '@angular/forms';
import { CookieService } from 'angular2-cookie/core';


@Component({
  selector: 'consulta-page',
  templateUrl: 'consulta.html',
  providers: [ConsultaServiceProvider]
})
export class ConsultaPage {
  public consultas: any;
  constructor(public navCtrl: NavController, public consultaService: ConsultaServiceProvider) {

  }

  ionViewWillEnter() {
    this.consultas = [];
    this.consultaService.getConsulta().subscribe(
      response => this.consultas = response
    );
  }

}
