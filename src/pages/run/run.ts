import { Component, OnInit} from '@angular/core';
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
export class RunPage implements OnInit {
lat:any;
long:any;
distance:number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

  ngOnInit() {
    let self = this
    setInterval(function () {
      self.getLatLong();
    }, 500);
  }

  getLatLong() { 
    this.geolocation.getCurrentPosition().then((resp) => {
      if(this.lat != undefined && this.long != undefined ){
       this.distance += this.getDistance({lat:resp.coords.latitude,lng:resp.coords.longitude},{lat:this.lat,lng:this.long})
      }
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;

     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  rad = (x) => {
    return x * Math.PI / 180;
  };
  
  getDistance = (p1, p2) => {
    let R = 6371000; // Earth’s mean radius in meter
    let dLat = this.rad(p2.lat - p1.lat);
    let dLong = this.rad(p2.lng - p1.lng);
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.rad(p1.lat)) * Math.cos(this.rad(p2.lat)) *
      Math.sin(dLong / 2) * Math.sin(dLong / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return d; // returns the distance in meter
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad RunPage');
  }

}
