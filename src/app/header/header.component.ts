import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selected =  new EventEmitter();
  constructor() { }

  onClkNav (feature) {
    this.selected.emit(feature);
  }

  ngOnInit() {
  }

}
