// J'importe le css du header et le logo crotte
import'./Header.css'
import crotte from '../img/poop.png';

// j'exporte une fonction header qui retourne mon header
export default function Header(){
    return (
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
    )
}