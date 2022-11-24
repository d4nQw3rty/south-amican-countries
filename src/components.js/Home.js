import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchUpdate } from '../redux/reducer/countriesSlice';
import '../App.css';

const img = require('../assets/continent.png');

const Home = () => {
  const country = useSelector((state) => state.countries.countries);
  const search = useSelector((state) => state.countries.search);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(searchUpdate(e.target.value));
  };

  return (
    <div>
      <div className="inputContainer">
        <input value={search} type="text" onChange={handleChange} className="inputTex" placeholder="<      country      >" />
      </div>
      <div className="Continent">
      <div>
        <Link to="/">
          <img src={img} alt="Continent" />
        </Link>
      </div>
      <div>
        <h2>South America</h2>
      </div>      
    </div>
    <div className='country-title-cont'><span className='country-title'>COUNTRIES</span></div>
      <div className="container">
        {
          search === ''
            ? country.map((item, index) => (              
              <div className="card" key={index}>
                <div className="card-img">
                  <Link to={`/Details/${item.name}`}>
                    <img
                      src={item.flag
                        ? item.flag
                        : 'https://www.countryflags.io/xx/flat/64.png'}
                      alt="flag"
                      className="flag"
                    />
                  </Link>
                </div>
                <div className="card-text">
                  <h2 className="card-title">{item.name}</h2>
                </div>
              </div>
            ))
            : country.filter((item) => item.name
              .toLowerCase()
              .includes(search.toLowerCase())).map((item) => (
                <div className="card" key={item.name}>
                  <div className="card-img">
                    <Link to={`/Details/${item.name}`}>
                      <img
                        src={item.flag
                          ? item.flag
                          : 'https://www.countryflags.io/xx/flat/64.png'}
                        alt="flag"
                        className="flag"
                      />
                    </Link>
                  </div>
                  <div className="card-text">
                    <h2 className="card-title">{item.name}</h2>
                  </div>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Home;
