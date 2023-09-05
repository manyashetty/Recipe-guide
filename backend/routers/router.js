


const UserController = require("../controllers/user.controller");
// const RecipeController = require("../controllers/recipeController");
const express = require("express");
const router = express.Router()
// router.post("/create",RecipeController.createRecipe);

//put or patch for update,,,,delete same,,,, create post ,,,,get....
router.post("/user",UserController.createUser);
router.post("/login",UserController.loginUser);
module.exports=router;
