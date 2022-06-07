// J'importe le css du footer et le logo crotte
import './Footer.css'
import crotte from '../img/poop.png';

// j'exporte une fonction footer qui retourne mon footer
export default function Footer(){
    return (
       <footer>
<p>
   ©PugCompagnie <img src={crotte} alt="crotte arc-en-ciel" />
</p>

</footer>
    )
}
