import { Component } from '@angular/core';
import {ShoppingListService} from "./shopping-list/services/shopping-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent {
  title = 'recipe-book';
  navigateTo: string = 'recipes';

  onPathReceived(path: string){
    this.navigateTo = path;
  }
}
