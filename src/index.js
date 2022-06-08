import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// j'importe le main, le footer et le header
import App from '../src/App/App';
import Emoji from './Emoji/Emoji';
import Footer from '../src/Footer/Footer'
import Header from '../src/Header/Header'
// injecter du code dans l index html via #root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // si il y a des beug on peut le voir
  <React.StrictMode>
    {/* j'injecte le header, le main et le footer dans ma constante root */}
    <Header />
    <Emoji/>
    <App />
    <Footer />
  </React.StrictMode>
);


