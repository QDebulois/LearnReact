import { recipes } from "./data.js";

function ContentOfRecipe(recipe) {
  const listOfIngredients = recipe.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <div key={recipe.id}>
      <h2>{recipe.name}</h2>
      Ingredients:
      <ul>{listOfIngredients}</ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => ContentOfRecipe(recipe))}
    </div>
  );
}
