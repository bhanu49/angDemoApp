import { Ingreident } from './../shared/ingredient.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.scss']
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingreident[] = [
    new Ingreident('Chicken' , 1),
    new Ingreident('Rice', 2)
  ];
  constructor() {
    console.log(this.ingredients);
   }

  ngOnInit() {
  }
  onIngAdd(ing) {
    this.ingredients.push(ing);
  }

}
