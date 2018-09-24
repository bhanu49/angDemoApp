import { Ingreident } from './../../shared/ingredient.modal';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.scss']
})
export class ShopingEditComponent implements OnInit {
 @Output() addIng = new EventEmitter <Ingreident> ();
  constructor() { }

  ngOnInit() {
  }
  addIngredient(a, b) {
    const  newIngreident = new Ingreident(a, b);
    this.addIng.emit(newIngreident);
    console.log(newIngreident);
  }
}
