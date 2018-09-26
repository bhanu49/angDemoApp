import { Ingreident } from './../shared/ingredient.modal';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class ShoppingListService {

 private ingredients: Ingreident[] = [
    new Ingreident('Chicken' , 1),
    new Ingreident('Rice', 2)
  ];
  constructor() { }

  getIng() {
    return this.ingredients;
  }
  onIngAdd(ing) {
    this.ingredients.push(ing);
  }
}
