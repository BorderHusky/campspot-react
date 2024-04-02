import React from 'react';
import './Header.css'; // Import CSS file for styling

function Header() {
  return (
    <div className="homepage__name">
      <h1>The Camp Spot</h1>
      <h2>Time for Smore fun!</h2>
      <div className="homepage__welcome">
        Welcome to 'The Camp Spot!' Your one stop shop for summer camp activities!
      </div>
    </div>
  );
}

export default Header;