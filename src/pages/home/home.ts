import { RequestOptions } from '@angular/http';
import { ComponentInicial } from './../../app/app.component';
import { LoginPage } from './../login/login';
import { CookieService } from 'angular2-cookie/core';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConsultaPage } from './../consulta/consulta';
import { PerfilPage } from './../perfil/perfil';
import { AboutPage } from './../about/about';

import { RestapiServiceProvider } from '../../providers/restapi-service/restapi-service';
// import { Toast } from '@ionic-native/toast/ngx';
import { ToastController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {


 public listaRU: any;
 public toast: Toast;
 private url: string = "https://www.reddit.com/new.json";
 users: any;



  constructor(public navCtrl: NavController, public cookieService: CookieService,
     public requestOptions:RequestOptions, public restapiService: RestapiServiceProvider,
     public toastCtrl: ToastController) {

     this.getUsers();

  }


  getUsers() {
    this.restapiService.getUsers()
    .then(data => {
      this.users = data;
    });
  }



  favoriteRecipe(user):void {

    let toast = this.toastCtrl.create({
      message: "Gerada solicitação para " + user.username,
      duration: 2000
    });
    toast.present();
  }


  itemSelecionado (user):void {
    alert("Selecionado usuário " + user.name);
  }





  public logout() {
    this.cookieService.removeAll();
    this.requestOptions.headers.set('Authorization', "Bearer ");
    this.navCtrl.setRoot(LoginPage);

  }


  pushPage() {
    this.navCtrl.setRoot(ConsultaPage);
  }

  doClickConsulta() {
    this.navCtrl.setRoot(ConsultaPage);
  }

  doClickPerfil() {
    this.navCtrl.setRoot(PerfilPage);
  }

  doClickAbout() {
    this.navCtrl.setRoot(AboutPage);
  }

}
