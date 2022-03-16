import { Ingredient } from "../../ingredient/ingredient.model";

export class ShoppingListService {
  currentIngredient: Ingredient;
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 1),
    new Ingredient('Mango', 2)
  ]
  constructor() {
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
