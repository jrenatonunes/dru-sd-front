import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestapiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestapiServiceProvider {

  apiUrl = 'https://jsonplaceholder.typicode.com';
  private data: any;

  constructor(public http: Http) {
    console.log('Hello RestapiServiceProvider Provider');
  }


  getUsers() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }



}
