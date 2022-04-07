import { Ingredient } from "../ingredient.model";
import {Subject} from "rxjs";

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  currentIngredient: Subject<Ingredient> = new Subject<Ingredient>();
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
    this.ingredientsChanged.next([...this.ingredients])
  }

  onAddIngredients (value) {
    this.ingredients.unshift(...value);
    this.ingredientsChanged.next([...this.ingredients])
  }
  onRemoveIngredient (ing) {
    const idx = this.ingredients.findIndex(ingredient => ingredient.name === ing.name && ingredient.amount === ing.amount);
    this.ingredients.splice(idx, 1);
    this.ingredientsChanged.next([...this.ingredients])
  }
}
