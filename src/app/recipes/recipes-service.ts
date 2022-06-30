import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list-service";
import { Recipe } from "./recipe.model";

@Injectable()
//118. Managing Recipes in a Recipe Service
export class RecipesService {
    //119. Using a Service for Cross-Component Communication
    recripeSelected = new EventEmitter<Recipe>();
    //------------------------------------------------------

   private recipes: Recipe[] = [
        new Recipe(
          'A test recipe',
          'This is simply a test',
          'https://img.delicious.com.au/Iok992Gi/w759-h506-cfill/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
          [
              new Ingredient('Meat', 1),
              new Ingredient('French Frice', 20)
          ]
        ),
        new Recipe(
            'A test Shopping',
            'This is simply a test',
            'https://img.delicious.com.au/Iok992Gi/w759-h506-cfill/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]
          )
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      //162. Configuring Route Parameters
      getRecipe(index : number){
        return this.recipes[index];
      }

      addIngredientToShoppingList(ingredient : Ingredient[]){
        this.slService.addIngredients(ingredient);
      }
}