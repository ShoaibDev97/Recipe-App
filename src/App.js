import React, { useState, useEffect } from "react";
import Recipe from "./component/Recipe.jsx";
import "./App.css";

function App() {
  const App_ID = "9edea084";
  const App_Key = "23320150be2d05279138f43f00ab03b0";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_Key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const handlerSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input
          placeholder="Search Recipes"
          className="search-bar"
          type="text"
          value={search}
          onChange={handlerSearch}
        />
        <br />
        <button className="search-botton" type="submit">
          Search
        </button>
      </form>
      <div className="container">
      <div className="row ">
      {recipes.map((recipe, index) => (
        <Recipe
        key={index}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingradiant={recipe.recipe.ingredientLines}
        />
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
