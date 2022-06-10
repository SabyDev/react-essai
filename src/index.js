import React from 'react';
import ReactDOM from 'react-dom/client';
import  {BrowserRouter,Routes, Route} from 'react-router-dom'

// j'importe le main, le footer et le header
import Contenu from './Components/Pages/Contenu/Contenu';
import Emoji from './Components/Components_pages/Emoji/Emoji';
import Footer from './Components/Components_pages/Footer/Footer';
import Header from './Components/Components_pages/Header/Header';
import Produit from '../src/Components/Pages/Produit/Produit';
import Contact from './Components/Pages/Contact/Contact';
import Post from './Components/Components_pages/Post/Post'
// injecter du code dans l index html via #root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // si il y a des beug on peut le voir
  <React.StrictMode>
    {/* j'injecte le header, le main et le footer dans ma constante root */}
    {/* <Header />
    <Emoji/>
    <Contenu />
    <Produits />   
    <Footer /> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}>
      <Route index element={<Contenu/>}/>
      <Route path='emoji' element={<Emoji/>}/>      
      <Route path='contact'element={<Contact/>}/>
      <Route path='post'element={<Post/>}/>
      <Route path='produit' element={<Produit/>}/>
      <Route path='footer' element={<Footer/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
  </React.StrictMode>
);


