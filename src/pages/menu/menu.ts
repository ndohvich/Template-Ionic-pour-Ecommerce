import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Category } from '../../models/interface-category';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage : any;
  categories: Category[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = HomePage;
    this.categories = [
      {
        title: "Vetements",
        description: "description",
        icon: "shirt",
      },
      {
        title: "Electroniques",
        description: "description",
        icon: "phone-portrait",
      },
      {
        title: "Mode & Accessoires",
        description: "description",
        icon: "bowtie",
      },
      {
        title: "Chaussures",
        description: "description",
        icon: "archive",
      }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openHome(){
    this.navCtrl.push(HomePage);
  }

}
