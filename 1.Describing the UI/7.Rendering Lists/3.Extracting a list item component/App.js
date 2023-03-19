import { recipes } from "./data.js";

function ContentOfRecipe({ id, name, ingredients, recipe }) {
  const listOfIngredients = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <div>
      <h2>{name}</h2>
      Ingredients:
      <ul>{listOfIngredients}</ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <ContentOfRecipe {...recipe} key={recipe.id} />
      ))}
    </div>
  );
}
