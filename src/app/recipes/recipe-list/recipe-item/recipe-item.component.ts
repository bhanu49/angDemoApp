import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.modal';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onSelected() {
    console.log(this.recipe);
    this.recipeService.selectedRecipe.emit(this.recipe);
  }
}
