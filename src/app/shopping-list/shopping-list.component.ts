import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Mondongo', 200),
    new Ingredient('Chorizo', 200),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
