import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-sky-700">Million Real Estate</h1>
      <nav>
        <ul className="hidden md:flex space-x-6">
          <li><a href="/" className="hover:text-sky-700">Inicio</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
