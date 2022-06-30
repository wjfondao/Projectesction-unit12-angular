import { Component, Input, OnInit} from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe;
// 163. Passing Dynamic Parameters to Links : @Input() indexId: number;
@Input() indexId: number;

  ngOnInit() {
  }

  
}
