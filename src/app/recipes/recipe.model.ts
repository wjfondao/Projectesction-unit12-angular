import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    public name:string;
    public discription:string;
    public imagePath:string;
    //122. Adding Ingredients to Recipes
    public ingredients: Ingredient[];
    constructor (name:string, disc:string, imagePath:string, ingredients: Ingredient[] ) {
        this.name = name;
        this.discription = disc;
        this.imagePath = imagePath;
        //122. Adding Ingredients to Recipes
        this.ingredients = ingredients;
    }
}