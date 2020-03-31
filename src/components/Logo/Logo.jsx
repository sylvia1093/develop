import React from 'react';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <img width="100px" src="./pagex-logo.png" alt="pagex" />
    </Link>
  );
}

export default Logo;
