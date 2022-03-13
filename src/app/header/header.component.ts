import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() path: EventEmitter<string> = new EventEmitter<string>();

  onSelect (val: string){
    this.path.emit(val);
  }
}
