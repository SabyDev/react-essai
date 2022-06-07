import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/App/App';

// injecter du code dans l index html via #root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // si il y a des beug on peut le voir
  <React.StrictMode>
    <App />
    <footer />
  </React.StrictMode>
);


