import logo from './pug.png';
import crotte from './poop.png';
import '../App/App.css';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={crotte} className="logo-crotte" alt="logo de pug compagnie" />
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Photos</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
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
      <footer>
        <p>
           ©PugCompagnie <img src={crotte} alt="crotte arc-en-ciel" />
        </p>
        
      </footer>
    </div>
  );
}

export default App;
