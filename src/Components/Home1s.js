import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import axios from "axios";
import "./Home1s.css";
 const Home1s = () => {
  const [recipes, setRecipes] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);

  const userID = useGetUserID();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSavedRecipes = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
        );
        setSavedRecipes(response.data.savedRecipes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
    fetchSavedRecipes();
  }, []);

  const saveRecipe = async (recipeID) => {
    try {
      const response = await axios.put("http://localhost:3001/recipes", {
        recipeID,
        userID,
      });
      setSavedRecipes(response.data.savedRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  const deleter = async (recipeID) => {
    try {
      const response = await axios.delete(`http://localhost:3001/recipes/delete/${recipeID}`);
    } catch (e) {
      console.log(e.message)
    }
  }
  const getShareableRecipeUrl = (recipeID) => {
    // Replace with your actual domain and route for viewing recipes
    const baseUrl = "http://localhost:3000/recipes";
    return `${baseUrl}/${recipeID}`;
  };

  const isRecipeSaved = (id) => savedRecipes.includes(id);
  const copyRecipeLinkToClipboard = (recipeID) => {
    const shareableUrl = getShareableRecipeUrl(recipeID);

    navigator.clipboard.writeText(shareableUrl)
      .then(() => {
        alert("Recipe link copied to clipboard!");
      })
      .catch((error) => {
        console.error("Copy to clipboard failed:", error);
      });
  };

  return (
    <div className="rr">
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
         
            <div>
              <h2>{recipe.name}</h2>
              <button
                onClick={() => saveRecipe(recipe._id)}
                disabled={isRecipeSaved(recipe._id)}
              > 
                {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
              </button>
              <button type="button" onClick={() => deleter(recipe._id)}
              >
                delete
              </button>
              <button onClick={() => copyRecipeLinkToClipboard(recipe._id)}
              >
                    Share
                  </button>
            </div>
            <div className="ingredients">
              <p>{recipe.ingredients}</p>
            </div>
            <div className="instructions">
              <p>{recipe.instructions}</p>
            </div> 
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Home1s;