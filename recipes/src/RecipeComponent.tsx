import { IRecipe } from "./IRecipe";

export const RecipeComponent = (props: { recipe: IRecipe }) => {
  const { recipe } = props;
  return (
    <div className="recipe">
      <div className="title">
        <img
          src={recipe.thumbnail || "https://localhost:3000/placeholder.jpg"}
          alt={recipe.title}
        />
        <p>{recipe.title}</p>
      </div>
      {recipe.ingredients && 
        <ul>
          {recipe.ingredients.split(",").map((ingredient) => (
            <li key={ingredient}></li>
          ))}
        </ul>
      }
      <a href={recipe.href} target="_blank">View Recipe</a>
    </div>
  );
};
