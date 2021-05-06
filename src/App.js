import { useState, useEffect } from 'react';
import './App.css';
import Homepage from './pages/HomePage';
import instance from './api/apiConfig';

const App = () => {

  return (
    <div className="container">
      <Homepage  />
  
    </div>
  );
}

export default App;
