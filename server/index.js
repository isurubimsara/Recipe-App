const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const userRouter = require('./src/routes/users')
const recipeRouter = require('./src/routes/recipes')


const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth",userRouter)
app.use("/recipes",recipeRouter)

mongoose.connect(
  "mongodb+srv://isuru:recipeapp@cluster0.kjdmsus.mongodb.net/userretryWrites=true&w=majority",
).then(() => {
    console.log("mongoDB sucessfully conected")
}).catch((err) => {
    console.log("error" + err)
})

app.listen(3001, () => {
    console.log("Server started")
});