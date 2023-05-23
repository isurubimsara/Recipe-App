import "./App.css"
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home'
import {CreateRecipe} from './pages/CreateRecipe'
import {SavedRecipe} from './pages/SavedRecipe'
import {Navbar} from './Components/Navbar'
import {SignIn} from './pages/SignIn'
import {SignInNew} from './pages/SignInNew'

export default function App() {
  return (
    <Router>
        <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/signIn" element = {<SignIn/>} />
        <Route path = "/signInNew" element = {<SignInNew/>} />
        <Route path = "/createRecipe" element = {<CreateRecipe/> } />
        <Route path = "/savedRecipe" element = {<SavedRecipe/> } />
      </Routes>
    </Router>
  )
}
