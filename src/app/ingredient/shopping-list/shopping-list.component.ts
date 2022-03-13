import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  currentIngredient: Ingredient;
ingredients: Ingredient[] = [
  new Ingredient('Apple', 1),
  new Ingredient('Mango', 2)
];
  constructor() { }

  ngOnInit(): void {
  }
  onAddIngredient (value) {
    this.ingredients.unshift(value);
  }
  onSelectIngredient (value: Ingredient) {
    this.currentIngredient = value;
  }
  onRemoveIngredient (ing) {
    const idx = this.ingredients.findIndex(ingredient => ingredient.name === ing.name && ingredient.amount === ing.amount);
    this.ingredients.splice(idx, 1);
  }
}
