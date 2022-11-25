import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://restcountries.com/v3.1/subregion/South America';

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
    search: '',
  },
  reducers: {
    searchUpdate: (state, action) => (
      { ...state, search: action.payload }
    ),

  },
  extraReducers: {
    [fetchCountries.fulfilled]: (state, action) => {
      const value = state;
      value.countries = action.payload.map((country) => ({
        name: country.name.common,
        oficialName: country.name.official,
        capital: country.capital,
        flag: country.flags.png,
        population: country.population,
        area: country.area,
        borders: country.borders,
        region: country.region,
        subregion: country.subregion,
        time: country.timezones,
      }));
    },
  },
});

export default countriesSlice.reducer;
export const { searchUpdate } = countriesSlice.actions;
