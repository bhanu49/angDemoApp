import { Recipe } from './recipe.modal';
import { EventEmitter } from '@angular/core';
import { Ingreident } from '../shared/ingredient.modal';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe> ();
  private recipes: Recipe[] = [
    new Recipe ('Biryani',
    'Hyderabad ki shaan',
    'https://images.food52.com/r2wsCDTJdoAB97kLIziNKxAVlic=/753x502/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg',
    [
      new Ingreident('Rice' , 1),
      new Ingreident ('chicken', 2)
    ]),

    new Recipe ('Laddu', 'Yummy sweet',
    'https://i.ytimg.com/vi/rVGSXDhhdQ4/maxresdefault.jpg',
    [
      new Ingreident('Basan', 2),
      new Ingreident ('oil', 4)
    ])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
