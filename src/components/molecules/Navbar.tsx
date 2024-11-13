import React from 'react';
import Logo from '../atoms/Logo';
import Toggler from '../atoms/Toggler';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Logo />
        <Toggler />
      </div>
    </nav>
  );
}

export default Navbar;
