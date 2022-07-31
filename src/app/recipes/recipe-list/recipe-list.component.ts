import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'testName',
      'testDesc',
      'https://www.justlifelogo.com/wp-content/uploads/2015/08/green-recipes-logo-for-sale.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
