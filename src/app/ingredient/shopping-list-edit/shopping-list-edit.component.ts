import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../ingredient.model";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

@ViewChild('ingredientName') nameRef: ElementRef;
@ViewChild('ingredientAmount') amountRef: ElementRef;
@Output() ingredient: EventEmitter<Ingredient> = new EventEmitter();
@Output() ingredientToRemove: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
@Input() currentIngredient: Ingredient;

  constructor() { }

  ngOnInit(): void {
  }

  addToList(){
    this.ingredient.emit(new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value));
  }
  emitToRemoveFromList(){
    this.ingredientToRemove.emit(new Ingredient(this.nameRef.nativeElement.value, this.amountRef.nativeElement.value));
  }
}
