import {Recipe} from "../../recipe/recipe.model";
import {EventEmitter} from "@angular/core";

export class RecipeService {
  currentRecipe = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
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

  getRecipes() {
    return [...this.recipes];
  }
}
