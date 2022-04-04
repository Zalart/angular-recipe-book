import {Component, OnInit} from '@angular/core';
import {Recipe} from "./recipe.model";
import {RecipeService} from "./services/recipe.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
  providers: [RecipeService]
})
export class RecipeComponent implements OnInit {
  currentRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }
ngOnInit() {
    this.recipeService.currentRecipe
      .subscribe((recipe: Recipe)=>{
      this.currentRecipe = recipe;
    })

}
}
