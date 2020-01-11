import { Component } from '@angular/core';
import { ActionSheetController, NavController, AlertController, ModalController } from 'ionic-angular';
import { Product } from '../../models/interface-products';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Articles: Product[];

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public actionCtrl: ActionSheetController,
              public modalCtrl: ModalController) {
    this.Articles = [
        {
          title: 'chemise',
          description: 'Lorem ipsum dolor sit',
          price: 45,
          category: 'vetements',
          createdAt: new Date(),
          state: 'neuf',
          city: 'yaoundé',
          id: '1',
          averageStar: 4,
          availability: {
            available: true,
            type: 'livraison',
            feed: 10
          },
        pictures : [
            'assets/imgs/b.jpg',
            'assets/imgs/a.jpg',
            'assets/imgs/c.jpg',
        ]
      },
      {
        title: 'T-shirt',
        description: 'Lorem ipsum dolor sit',
        price: 4500,
        category: 'vetements',
        createdAt: new Date(),
        state: 'neuf',
        city: 'yaoundé',
        id: '1',
        averageStar: 2,
        availability: {
          available: true,
          type: 'livraison',
          feed: 100
        },
      pictures : [
          'assets/imgs/c.jpg',
          'assets/imgs/b.jpg',
          'assets/imgs/a.jpg',
      ]
    },
    {
      title: 'Polo',
      // tslint:disable-next-line: max-line-length
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, consequatur odio soluta reiciendis ad adipisci, quod impedit autem molestias doloribus hic eum ex error, dolorem obcaecati cupiditate natus officiis. Ipsam?',
      price: 45,
      category: 'vetements',
      createdAt: new Date(),
      state: 'neuf',
      city: 'yaoundé',
      id: '1',
      averageStar: 4,
      availability: {
        available: true,
        type: 'livraison',
        feed: 10
      },
    pictures : [
        'assets/imgs/a.jpg',
        'assets/imgs/b.jpg',
        'assets/imgs/c.jpg',
    ]
    },
    {
      title: 'Caleçon',
      // tslint:disable-next-line: max-line-length
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, consequatur odio soluta reiciendis ad adipisci, quod impedit autem molestias doloribus hic eum ex error, dolorem obcaecati cupiditate natus officiis. Ipsam?',
      price: 45,
      category: 'vetements',
      createdAt: new Date(),
      state: 'neuf',
      city: 'yaoundé',
      id: '1',
      averageStar: 4,
      availability: {
        available: true,
        type: 'livraison',
        feed: 10
      },
    pictures : [
        'assets/imgs/b.jpg',
        'assets/imgs/a.jpg',
        'assets/imgs/c.jpg',
    ]
    },
    {
      title: 'Culotte',
      // tslint:disable-next-line: max-line-length
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, consequatur odio soluta reiciendis ad adipisci, quod impedit autem molestias doloribus hic eum ex error, dolorem obcaecati cupiditate natus officiis. Ipsam?',
      price: 45,
      category: 'vetements',
      createdAt: new Date(),
      state: 'neuf',
      city: 'yaoundé',
      id: '1',
      averageStar: 4,
      availability: {
        available: true,
        type: 'livraison',
        feed: 10
      },
    pictures : [
        'assets/imgs/c.jpg',
        'assets/imgs/a.jpg',
        'assets/imgs/b.jpg',
    ]
    },
    {
      title: 'Pantalon',
      description: 'Lorem ipsum dolor sit',
      price: 45,
      category: 'vetements',
      createdAt: new Date(),
      state: 'neuf',
      city: 'yaoundé',
      id: '1',
      averageStar: 4,
      availability: {
        available: true,
        type: 'livraison',
        feed: 10
      },
    pictures : [
        'assets/imgs/a.jpg',
        'assets/imgs/b.jpg',
        'assets/imgs/c.jpg',
    ]
    },
    ];
  }

  showDetails(article: Product) : void{
    this.navCtrl.push(DetailsPage, {data : article});
  }

}
