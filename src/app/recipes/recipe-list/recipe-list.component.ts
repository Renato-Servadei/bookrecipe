import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe("Locro de Zapallo", "Andean pumpkin, potato and black mint stew", "https://www.perudelights.com/wp-content/uploads/2011/12/locrfo-R-1024x690.jpg") 

  ] ;

  constructor() { }

  ngOnInit(): void {
  }

}
