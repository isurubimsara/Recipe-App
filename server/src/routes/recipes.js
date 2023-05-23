const express = require('express')
const mongoose = require('mongoose')
var RecipeModel = require('../models/Recipes')

const router = express.Router()


//get all recipes
router.get("/", async (req,res) => {
    try{
        const response = await RecipeModel.find({})
        res.json(response)
    }catch(err){
        res.json(err)
    }
})

//create recipes

router.post("/add", async (req,res) => {
    const newRecipe = new RecipeModel(req.body)
    try{
        const response = await newRecipe.save()
        res.json(response)
        console.log("backend reached")
    }catch(err){
        res.json(err)
    }

})

// Save a Recipe

router.put("/", async (req, res) => {
    const recipe = await RecipeModel.findById(req.body.recipeID);
    const user = await UserModel.findById(req.body.userID);
    try {
      user.savedRecipes.push(recipe);
      await user.save();
      res.status(201).json({ savedRecipes: user.savedRecipes });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Get saved recipes

router.get("/savedRecipes/:userId", async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.userId);
      const savedRecipes = await RecipesModel.find({
        _id: { $in: user.savedRecipes },
      });
  
      console.log(savedRecipes);
      res.status(201).json({ savedRecipes });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });


module.exports = router;




