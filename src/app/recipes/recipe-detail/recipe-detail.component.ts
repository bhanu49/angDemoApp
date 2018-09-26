import { Recipe } from './../recipe.modal';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListService } from '../../shoping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  addToCart() {
    this.recipe.ingredient.forEach(element => {
      console.log(element);
      this.slService.onIngAdd(element);
    });
  }
}
