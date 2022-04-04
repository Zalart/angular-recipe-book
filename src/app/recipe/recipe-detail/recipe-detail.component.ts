import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {ShoppingListService} from "../../shopping-list/services/shopping-list.service";
import {Ingredient} from "../../shopping-list/ingredient.model";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{

@Input() recipe: Recipe;
  constructor(private shoppingListService: ShoppingListService) { }

ngOnInit() {
}

onSendToList() {
  this.shoppingListService.onAddIngredients(this.recipe.ingredients);
}
}
