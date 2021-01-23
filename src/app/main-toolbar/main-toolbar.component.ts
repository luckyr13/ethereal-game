import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent {

  @Input() drawer: any;

  constructor() {}

  toggle() {
  	this.drawer.toggle();
  }

}
