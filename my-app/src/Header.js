import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from './App';
// import './index.css'; 

const Header = () => {
    const {login,username}=useContext(GlobalState)
  return (
    <header className="bg-gray-800 text-white rounded-full p-10 h-max">
      <nav className="flex items-center justify-between">
        <div className="flex space-x-4 ">
          <Link to="/" className="text-white text-4xl">Home</Link>
          <Link to={login?"/view":"/login"} className="text-white text-4xl">View</Link>
       

          <Link to="/login" className="text-white text-4xl">Log In</Link>
          <Link to="/About" className="text-white text-4xl">About</Link>
          <Link to="/Contact" className="text-white text-4xl">Contact</Link>
          


          
          {/* <h1>{username}</h1> */}
        </div>
      </nav>
    </header>
  );
};
export default Header;