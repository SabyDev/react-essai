import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// j'importe le main, le footer et le header
import Contenu from '../src/Contenu/Contenu';
import Emoji from './Emoji/Emoji';
import Footer from '../src/Footer/Footer'
import Header from '../src/Header/Header'
// import Produit from '../src/Produit/Produit'
// import Message from '../src/Message/Message'
import photo1 from '../src/img/siege1.webp'
import photo2 from '../src/img/images.jpg'
import photo3 from '../src/img/photo3.jpg'
import Produits from '../src/Produit/Produit';
// injecter du code dans l index html via #root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // si il y a des beug on peut le voir
  <React.StrictMode>
    {/* j'injecte le header, le main et le footer dans ma constante root */}
    <Header />
    <Emoji/>
    <Contenu />
    <Produits img={photo1} titre= 'siège Gamer' description='siège confort pour gamer 24/24' price='2500€' avis='⭐⭐⭐⭐' />
    <Produits img={photo2} titre= 'siège Gamer' description='siège confort ' price='200€' avis='⭐⭐' />
    <Produits img={photo3} titre= 'siège Gamer' description='siège confort pour wc' price='1500€' avis='⭐⭐⭐⭐' />
    <Footer />
  </React.StrictMode>
);


