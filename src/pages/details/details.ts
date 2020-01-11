import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController, ToastOptions, ModalController } from 'ionic-angular';
import { Product } from '../../models/interface-products';
import {Storage} from '@ionic/storage';
import { itemCart } from '../../models/interface-itemCart';
import { CartPage } from '../cart/cart';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  ProductDetails: Product;

  constructor(public navCtrl: NavController,
     public navParams: NavParams, public event: Events, 
     public storage: Storage, public toast: ToastController, 
     public modal: ModalController) {
      this.ProductDetails = this.navParams.get("data");
      this.event.subscribe('star-rating: changed', (note) => {
      console.log('voici la note choisie', note);
    })
  }

  ionViexDidLoad(){
    console.log('ionViewDidLoad DetailsPage');
  }

  goBack() : void{
    this.navCtrl.pop();
  }

  addToCart(ProductDetails: Product) : void{
  
    let added: boolean = false;
    // si le panier est vide
    this.storage.get("Cart").then((data: itemCart[]) =>{
      if(data === null || data.length === 0){
        data = [];
        data.push({
          item: ProductDetails,
          qty: 1,
          amount: ProductDetails.price
        })
      }
      else{
        //si le panier n'est pas vide
        for (let i = 0; i < data.length; i++) {
          const element: itemCart = data[i];
          if(ProductDetails.id === element.item.id){
            element.qty += 1;
            element.amount += ProductDetails.price;
            added = true;
          }
        }
        if(!added){
          //le panier n'est pas vide et ne contient pas l'article
          data.push({
            item: ProductDetails,
            qty: 1,
            amount: ProductDetails.price
          })
        }
      }
      this.storage.set("Cart", data).then(data =>{
        let options: ToastOptions = {
          message: "Votre panier a été mis à jour",
          duration: 1500,
          showCloseButton: true,
          closeButtonText: "Fermer",
        };
        this.toast.create(options).present();
      }).catch(err =>{
        console.log("Erreur ",err);
      })
    })
  }

  openCart() : void{
      this.modal.create(CartPage).present();
  }

}
