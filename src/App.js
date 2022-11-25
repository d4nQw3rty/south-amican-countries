import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './components.js/Home';
import { fetchCountries } from './redux/reducer/countriesSlice';
import Details from './components.js/Details';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchCountries());
  return (
    <>
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Details/:name" element={<Details />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
