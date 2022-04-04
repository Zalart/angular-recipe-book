import {EventEmitter} from "@angular/core";

import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shopping-list/ingredient.model";


export class RecipeService {
  currentRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      0,
      'Apple pie',
      "You'll need apples and a dough",
      'https://assets.epicurious.com/photos/59bc150e74febd49ca741558/1:1/w_3197,h_3197,c_limit/CINNAMON-CRUMBLE-APPLE-PIE-RECIPE-07092017.jpg',
      [new Ingredient('Flour', 3), new Ingredient('Sugar', 10)]),
    new Recipe(
      1,
      'Mango pie',
      "You'll need mangoes and a dough",
      'https://www.tasteofhome.com/wp-content/uploads/2018/01/Mango-Pie-with-Coconut-Crust_exps168868_TH133086A07_24_10bC_RMS-3.jpg?fit=700,1024',
      [new Ingredient('Fish', 2), new Ingredient('Salt', 9)]),
  ];

  getRecipes() {
    return [...this.recipes];
  }
  getRecipe(id: number) {
    return this.recipes.find(recipe=> recipe.id === id);
  }
}
