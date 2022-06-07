// J'importe le logo, le css de app
import logo from './pug.png';
import '../App/App.css';


// je crée une foncton app qui me renvoie le main
function App() {
  return (
    
    <div className="App">
      
      <main className="App-main">
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
