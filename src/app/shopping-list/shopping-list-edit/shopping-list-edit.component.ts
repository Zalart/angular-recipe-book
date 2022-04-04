import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../ingredient.model";
import {ShoppingListService} from "../services/shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

@ViewChild('ingredientName') nameRef: ElementRef;
@ViewChild('ingredientAmount') amountRef: ElementRef;
currentIngredient: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingListService.currentIngredient.subscribe((value)=> this.currentIngredient = value);
  }

  addToList(){
    this.shoppingListService.onAddIngredient(new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value));
  }
  removeFromList(){
    this.shoppingListService.onRemoveIngredient(new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value));
  }
}
