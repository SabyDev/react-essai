// J'importe le logo, le css de app
import logo from '../../../style/assets/img/pug.png';
import './Contenu.css';
import '../../Components_pages/CardProduit/CardProduit';
import { useState } from 'react';



// je crée une foncton app qui me renvoie le main
function App() {
  // je réinitialise la constante à 0
  const initialCount =0;
    // Déclare une nouvelle variable d'état, que l'on va appeler « count »
  const [count, setCount] = useState(initialCount);
  return (
    
    <div className="App">
      
      <main className="App-main">
        <h1>Bienvenue chez le PUG</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>          
          N'embrouille pas Le PUG !!!!!
        </p>
         
  
    <div className='compteur'>
      Total : {count}
      <button onClick={() => setCount(initialCount)}>Réinitialiser</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  
    
      </main>      
    </div>
  )
}

export default App;
