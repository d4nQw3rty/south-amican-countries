import { fetchCountries, searchUpdate } from './countriesSlice';

describe('fetchCountries', () => {
  test('fetchCountries is a function', () => {
    expect(typeof fetchCountries).toBe('function');
  });
});

describe('searchUpdate', () => {
  test('searchUpdate is a function', () => {
    expect(typeof searchUpdate).toBe('function');
  });
  test('searchUpdate returns an object', () => {
    expect(typeof searchUpdate()).toBe('object');
  });

  test('searchUpdate returns an object with a payload property with a value of "test"', () => {
    expect(searchUpdate('test').payload).toBe('test');
  });
});
