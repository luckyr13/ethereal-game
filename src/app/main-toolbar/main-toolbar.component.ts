import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent {
	rotate: boolean = false;
  @Input() drawer: any;

  constructor() {}

  toggle() {
  	this.drawer.toggle();
  	this.rotate = !this.rotate;
  }

}
