import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.modal';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() selectedRecipe = new EventEmitter ();
  recipes: Recipe[];
  // recipes: Recipe[] = [
  //   new Recipe ('Biryani', 'Hyderabad ki shaan',
  //   'https://images.food52.com/r2wsCDTJdoAB97kLIziNKxAVlic=/753x502/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg'),

  //   new Recipe ('Laddu', 'Yummy sweet',
  //   'https://i.ytimg.com/vi/rVGSXDhhdQ4/maxresdefault.jpg')
  // ];
  constructor(private recipeService: RecipeService) {
    console.log(this.recipes);
  }

  ngOnInit() {
    this.recipes =  this.recipeService.getRecipes();
  }

  // onRecipeSelected(a) {
  //   console.log(a);
  //   // this.selectedRecipe.emit(a);
  // }

}
