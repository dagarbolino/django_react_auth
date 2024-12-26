import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import AuthContext from "../context/AuthContext";

function NavBar() {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section className="flex flex-col sm:flex-row justify-between items-center w-full h-28 md:px-2 bg-blue-500">
        <h1 className='text-5xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparentm-2 shadow-md rounded-md p-1 text-shadow bg-blue-500'>
          Logo
        </h1>
        <button className="sm:hidden bg-blue-500 text-white p-2 rounded-md m-2" onClick={toggleMenu}>
          Menu
        </button>
        <nav className={`flex-col sm:flex-row sm:flex w-full md:w-auto z-10 ${menuOpen ? 'flex' : 'hidden'} sm:items-center`}>
          <NavLink to='/' className='bg-blue-500 text-white p-2 rounded-md m-2 w-auto hover:bg-blue-600 transition-colors duration-300 ease-in-out'>
            Home
          </NavLink>
          <NavLink to='/acceuil' className='bg-blue-500 text-white p-2 rounded-md m-2 w-auto hover:bg-blue-600 transition-colors duration-300 ease-in-out'>
          Acceuil
          </NavLink>
          {user ? (
            <Link className='bg-red-500 text-white p-2 rounded-md mx-2 w-auto hover:bg-red-600 transition-colors duration-300 ease-in-out' onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <NavLink to='/login' className='bg-green-500 text-white p-2 rounded-md mx-2 w-auto hover:bg-green-600 transition-colors duration-300 ease-in-out'>
              Login
            </NavLink>
          )}
        </nav>
      </section>
    </>
  );
}

export default NavBar;