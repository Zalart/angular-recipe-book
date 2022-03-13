import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
 @Output() currentRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Apple pie',
      "You'll need apples and a dough",
      'https://assets.epicurious.com/photos/59bc150e74febd49ca741558/1:1/w_3197,h_3197,c_limit/CINNAMON-CRUMBLE-APPLE-PIE-RECIPE-07092017.jpg'
    ),
    new Recipe(
      'Mango pie',
      "You'll need mangoes and a dough",
      'https://assets.epicurious.com/photos/59bc150e74febd49ca741558/1:1/w_3197,h_3197,c_limit/CINNAMON-CRUMBLE-APPLE-PIE-RECIPE-07092017.jpg'
    ),
  ];

  constructor() {}
  onRecipeChosen(recipe:Recipe){
    this.currentRecipe.emit(recipe);
  }
  ngOnInit(): void {}
}
