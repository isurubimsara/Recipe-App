const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const UserModel = require('../models/Users')

const router = express.Router();


// User registration

router.post('/register', async (req,res) => {
    const {username, password} = req.body;

    const user = await UserModel.findOne({username})
    

    if(user){
        return res.json({message: "User already exists"})        
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new UserModel({username, password: hashedPassword})
    await newUser.save()

    res.json({message: `User successfully registered !, Please login ${username}`})
})

//User Login

router.post("/login", async (req,res) => {
    const {username, password} = req.body
    const user = await UserModel.findOne({username})

    if(!user){
        return res.json({message: "user doesn't exists ! "})
    }

    const isPassValid = await bcrypt.compare(password, user.password)

    if(!isPassValid){
        return res.json({message: "username or password incorrect"})
    }

    const token = jwt.sign({id:user._id}, "secret")
    res.json({token, userID: user._id})

})

module.exports = router;