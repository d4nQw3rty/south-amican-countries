import React from 'react';
import { useSelector } from 'react-redux';

const img = require('../assets/continent.png');

const Home = () => {
  const country = useSelector((state) => state.countries.countries);

  return (
    <div>
      <div className="continent">
        <div className="continent-img">
          <img src={img} alt="continent" className="continent-img" />
        </div>
        <div className="continent-text">
          <h1 className="continent-title">South America</h1>
        </div>
      </div>
      <div className="container">
        {country.map((item) => (
          <div className="card" key={item.name}>
            <div className="card-image-container">
              <img
                className="card-image"
                src={item.flag
                            .replace('https://restcountries.com/data/', 'https://restcountries.com/data/')  // eslint-disable-line
                  .replace('.svg', '.png')}
                alt={item.name}
              />
            </div>
            <div className="card-body">
              <h2>{item.name}</h2>
              <p>
                <strong>Population:</strong>
                {item.population}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
