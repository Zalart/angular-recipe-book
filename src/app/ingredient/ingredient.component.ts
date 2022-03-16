import { Component, OnInit } from '@angular/core';
import {ShoppingListService} from "../shared/services/shopping-list.service";

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css'],
  providers: [ShoppingListService]
})
export class IngredientComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

}
