import "./App.css"
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home'
import {Auth} from './pages/Auth'
import {CreateRecipe} from './pages/CreateRecipe'
import {SavedRecipe} from './pages/SavedRecipe'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/auth" element = {<Auth/> } />
        <Route path = "/createRecipe" element = {<CreateRecipe/> } />
        <Route path = "/savedRecipe" element = {<SavedRecipe/> } />
      </Routes>
    </Router>
  )
}
