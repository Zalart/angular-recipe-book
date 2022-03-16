import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../../shared/services/recipe.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent{
@Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) {
  }

  onRecipeSelected(){
    this.recipeService.currentRecipe.emit(this.recipe);
  }
}
