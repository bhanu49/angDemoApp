import { Ingreident } from './../../shared/ingredient.modal';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.scss']
})
export class ShopingEditComponent implements OnInit {
//  @Output() addIng = new EventEmitter <Ingreident> ();
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }
  addIngredient(a, b) {
    const  newIngreident = new Ingreident(a, b);
    // this.addIng.emit(newIngreident);
    this.slService.onIngAdd(newIngreident);
    console.log(newIngreident);
  }
}
