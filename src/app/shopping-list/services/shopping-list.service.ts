import {EventEmitter} from "@angular/core";

import { Ingredient } from "../ingredient.model";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  currentIngredient: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apple', 1),
    new Ingredient('Mango', 2)
  ]
  constructor() {
  }
  getIngredients() {
    return [...this.ingredients];
  }
  onAddIngredient (value) {
    this.ingredients.unshift(value);
    this.ingredientsChanged.emit([...this.ingredients])
  }

  onAddIngredients (value) {
    this.ingredients.unshift(...value);
    this.ingredientsChanged.emit([...this.ingredients])
  }
  onRemoveIngredient (ing) {
    const idx = this.ingredients.findIndex(ingredient => ingredient.name === ing.name && ingredient.amount === ing.amount);
    this.ingredients.splice(idx, 1);
    this.ingredientsChanged.emit([...this.ingredients])
  }
}
