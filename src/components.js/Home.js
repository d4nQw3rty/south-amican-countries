import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
      <div className="continent">
        <div className="continent-img">
          <img src={img} alt="continent" />
        </div>
        <div className="continent-text">
          <h1 className="continent-title">South America</h1>
        </div>
      </div>
      <div className="inputContainer">
        <input value={search} type="text" onChange={handleChange} className="inputTex" />
      </div>
      <div className="container">
        {
          search === ''
            ? country.map((item) => (
              <div className="card" key={item.name}>
                <div className="card-img">
                  <img
                    src={item.flag
                      ? item.flag
                      : 'https://www.countryflags.io/xx/flat/64.png'}
                    alt="flag"
                    className="flag"
                  />
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
                    <img
                      src={item.flag
                        ? item.flag
                        : 'https://www.countryflags.io/xx/flat/64.png'}
                      alt="flag"
                      className="flag"
                    />
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
