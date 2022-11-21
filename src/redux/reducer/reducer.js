'https://restcountries.com/';
'https://restcountries.com/v3.1/alpha?codes=col,pe,bol,ve,ecu,chi,arg,pry,uru,bra';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCountries= createAsyncThunk(
    'countries/fetchCountries',
    async () => {
        const response = await fetch('https://restcountries.com/v3.1/alpha?codes=col,pe,bol,ve,ecu,chi,arg,pry,uru,bra');
        const data = await response.json();
        return data;
    }
  );

const countriesSlice = createSlice({
    name: 'countries',
    initialState: {
        countries: [],
        status: 'idle',
        error: null,
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
                nativeName: country.name.nativeName,               
                languages: country.languages,
                currency: country.currencies,                
                }));
        }      
    }
});

export default countriesSlice.reducer;
