const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const userRouter = require('./src/routes/users')
//import {userRouter } from './src/routes/users'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth",userRouter)

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