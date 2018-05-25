import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the RunPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-run',
  templateUrl: 'run.html',
})
export class RunPage {
lat:any;
long:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RunPage');
  }

}
