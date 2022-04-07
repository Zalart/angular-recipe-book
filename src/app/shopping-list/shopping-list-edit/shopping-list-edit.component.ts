import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../ingredient.model";
import {ShoppingListService} from "../services/shopping-list.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

@ViewChild('ingredientName') nameRef: ElementRef;
@ViewChild('ingredientAmount') amountRef: ElementRef;
currentIngredient: Ingredient;
subCurrentIngredient: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
   this.subCurrentIngredient = this.shoppingListService.currentIngredient.subscribe((value)=> this.currentIngredient = value);
  }

  ngOnDestroy() {
    this.subCurrentIngredient.unsubscribe();
  }

  addToList(){
    this.shoppingListService.onAddIngredient(new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value));
  }
  removeFromList(){
    this.shoppingListService.onRemoveIngredient(new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value));
  }
}
