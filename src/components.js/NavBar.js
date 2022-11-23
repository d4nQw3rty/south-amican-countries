import React from 'react';

const NavBar = () => {
  const links = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'About',
      path: '/about',
    },
  ];

  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <a href={link.path}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
