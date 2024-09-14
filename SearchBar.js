import React, { useState, useEffect } from 'react';
import countryData from './countries.json'; // Import your JSON data

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setFilteredCountries(countryData);
  }, []);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);

    const filtered = countryData.filter(country =>
      country.country.toLowerCase().includes(searchQuery)
    );

    setFilteredCountries(filtered);
  };

  return (
    <div>
      {/* Navbar */}
      {/* <div className="navbar">
        <a href="#">My Country Search App</a>
      </div> */}

      {/* Search bar container */}
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          className="search-input"
          placeholder="Search for a country"
        />
        {/* Suggestions Dropdown */}
        {query && filteredCountries.length > 0 && (
          <ul className="suggestions-list">
            {filteredCountries.map((country, index) => (
              <li
                key={index}
                onClick={() => setQuery(country.country)} // Update the input when a suggestion is clicked
              >
                {country.country}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
