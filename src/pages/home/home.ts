import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RunPage } from '../run/run';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onTap(){
    this.navCtrl.push(RunPage)
  }
}
