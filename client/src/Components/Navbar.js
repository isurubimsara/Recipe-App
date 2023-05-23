import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies('access_token', "");
    window.localStorage.clear();
    navigate('/auth');
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>

      {!cookies.access_token ? (
         <Link to="/createRecipe">Create Recipes</Link>,
         <Link to="/savedRecipe">Saved Recipes</Link>,
         <Link to="/signInNew">Register</Link>,
         <Link to="/signIn">Login</Link>
      ) : (
        <button  onClick={logout}> Logout </button>
      )}
    </div>
  );
};
