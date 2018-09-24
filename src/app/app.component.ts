import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angEshop';
  @Input()  displayNav = 'Recipe';
  onNav(display) {
    this.displayNav = display;
  }
}
