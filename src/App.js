import React from 'react';
import './App.css';
import SearchPhotos from "./Component/Photo"

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Image Gallery App</h1>
        <SearchPhotos />
</div>
    </div>
  );
}

export default App;
