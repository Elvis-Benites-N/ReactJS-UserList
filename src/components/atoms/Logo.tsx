import React from 'react';

const Logo: React.FC = () => {
  return (
    <a className="navbar-brand mx-auto" href="#">
      <img 
        src="https://logo.clearbit.com/clearbit.com" 
        alt="Logo de la empresa" 
        className="d-inline-block align-text-top" 
        height="30" 
      />
    </a>
  );
}

export default Logo;
