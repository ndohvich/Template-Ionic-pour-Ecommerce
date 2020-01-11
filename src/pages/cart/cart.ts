import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { itemCart } from '../../models/interface-itemCart';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  CartItems: itemCart[];
  total: number = 0;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public viewCtrl : ViewController,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
    this.storage.get("Cart")
      .then((data: itemCart[]) =>{
        this.CartItems = data;
        this.CartItems.forEach((element: itemCart)=>{
          this.total += (element.item.availability.feed + element.item.price * element.qty)
        })
      })
      .then(err =>  {
        console.log("Erreur Survenue: ", err);
      })
  }

  closeModal() : void{
    this.viewCtrl.dismiss();
  }

}
