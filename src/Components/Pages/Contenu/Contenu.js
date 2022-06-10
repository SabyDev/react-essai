// J'importe le logo, le css de app
import logo from '../../../style/assets/img/pug.png';
import './Contenu.css';
import '../../Components_pages/CardProduit/CardProduit'



// je crée une foncton app qui me renvoie le main
function App() {
  return (
    
    <div className="App">
      
      <main className="App-main">
        <h1>Bienvenue chez le PUG</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>          
          N'embrouille pas Le PUG !!!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>  

    
      </main>      
    </div>
  );
}

export default App;
