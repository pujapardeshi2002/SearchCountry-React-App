import React from 'react';
import './App.css';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <div className="navbar">
        <h1>Country Search</h1>
      </div>

      {/* Search Bar */}
      <SearchBar />
    </div>
  );
}

export default App;
