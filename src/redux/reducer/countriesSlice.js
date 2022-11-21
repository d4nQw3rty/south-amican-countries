import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const url ='https://restcountries.com/v3.1/alpha?codes=col,pe,bol,ve,ecu,chi,arg,pry,uru,bra';
export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await fetch(url);
    const countries = await response.json();
    return countries;
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: {
    [fetchCountries.fulfilled]: (state, action) => {
      const value = state;
      value.countries = action.payload.map((country) => ({
        name: country.name.common,
        capital: country.capital,
        flag: country.flags.png,
        population: country.population,
        area: country.area,
        borders: country.borders,
        languages: country.languages,
        currency: country.currencies,
      }));
    },
  },
});

export default countriesSlice.reducer;
