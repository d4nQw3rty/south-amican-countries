import React from 'react';

const NavBar = () => {
  const link = [
    { key: 1, name: 'Home', path: '/' },
    { key: 2, name: 'About', path: '/about' },
    { key: 3, name: 'Contact', path: '/contact' },
  ];
  return (
    <header>
      <nav>
        <span className="logo-holder">
          <img src="" alt="SouthAmerica" className="logo" />
          <h1 className="Title">Hispanic South America Countries</h1>
        </span>
        <ul className="nav-links">
          {link.map((link) => (
            <li key={link.key}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
