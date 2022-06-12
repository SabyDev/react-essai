// J'importe le css du header et le logo crotte
import'./Header.css'
import crotte from '../../../style/assets/img/poop.png';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// importation du HOOK
import { useState } from 'react';
import Modal from '../Modal/Modal';

// j'exporte une fonction header qui retourne mon header
export default function Header(){
  const [show, setShow] = useState(false);
function handleModal(){  
  setShow(!show);
}
    return (
        <header className="App-header">
        <img src={crotte} className="logo-crotte" alt="logo de pug compagnie" />
        <div className="modalContenu">
          <button onClick={handleModal}>
            {show ? 'cacher' : 'montrer'} la modal
          </button>
          {show && <Modal/>}
        </div>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="produit">Déguisements</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><Link to="post">Blog</Link></li>
          </ul>
        </nav>
        <Outlet/>
      </header>
    )
}