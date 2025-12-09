import { useState } from "react";
import type { FormEvent } from "react";

export function Main() {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");

    if (typeof newIngredient !== "string") return;

    setIngredients((prev) => [...prev, newIngredient.trim()]);

    event.currentTarget.reset(); // <-- clears the input
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="add-ingredient-form ">
        <input type="text" placeholder="e.g. apple" name="ingredient" />
        <button type="submit">Add ingredient</button>
      </form>
      <ul className="list">{ingredientsListItems}</ul>
    </>
  );
}
