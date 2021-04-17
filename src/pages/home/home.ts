import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {
    const browser = this.iab.create('https://www.veritime.com.br/veritime3_teste', 'defaults', {location:'no'});
  //   this.open();
  browser.on('exit').subscribe(event => {
      navigator['app'].exitApp();
  })

  }


}
