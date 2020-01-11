import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsPage } from './details';
import { StarRatingModule } from 'ionic3-star-rating';

@NgModule({
  declarations: [
    DetailsPage,
  ],
  imports: [
    StarRatingModule,
    IonicPageModule.forChild(DetailsPage)
  ],
})
export class DetailsPageModule {}
