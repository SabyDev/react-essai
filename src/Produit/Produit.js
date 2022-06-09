import './Produit.css'
import '../CardProduit/CardProduit'
import CardProduit from '../CardProduit/CardProduit';

// const Produits = [
//    {name: '🍎 pomme' , quantity: 1},
//    {name: '🍎 poire' , quantity: 2},
//    {name: '🍈 melon ', quantity: 3},
//    {name: '🍇 raisin' , quantity: 4},
//    {name: '🍒 cerise' , quantity: 5}
// ]

// function moins (){
//     for(let i = [Produits.quantity]; i>[Produits.quantity]; i++ ){
//          i--
//     }
//     console.log(moins);
// }
// export default function Produit(){
//     return(
//       <div className='Produit'>
//           {Produits.map(
//               produit => (
//                   <li key= {produit} onClick={event => ({moins})}>{produit.name} : {produit.quantity}</li>
//               )  
//           )            
//           }
          
//       </div>  
//     )
// }

// Créer un tableau produits
// img, titre, description, id, un prix et note avis
// le composant devra afficher la carte
// crééer d'autre composant 

// export default function Produits (props) {
//     return (
//         <div className='msg'>
//         <img className='photo' src={props.img} alt="" />
//         <h2>{props.titre}</h2>            
//         <p className='descrip'>{props.description}</p>
//         <div className='price'>{props.price}</div>
//         <div className='avis'>{props.avis}</div>
//         </div>
//     )
//     }
// Je fais un tableau qui enregistre mes objets
const produits = [
    {
      image: 'https://i.pinimg.com/originals/96/a0/f7/96a0f781726056493714783f2e094c34.jpg',
      id: 1,
      titre: 'siège gamer actif',
      prix: '300€',
      description: 'Siège GAMER toilette assise confort, pour ne jamais perdre le fil de la pensée',
      avis:'⭐⭐⭐⭐'
    },
    {
      image: 'http://koreus.cdn.li/media/201409/110-insolite-17.jpg',
      id: 2,
      titre: 'Siège Gamer',
      prix: '70€',
      description: 'toilette e-tech basic',
      avis: '⭐⭐⭐'
    },
    {
      image:
        'https://static-pepper.dealabs.com/comments/raw/PSPyv/35694512_1/fs/1090x545/qt/80/35694512_1.jpg',
      id: 3,
      titre: 'siège Gamer  ',
      prix: '2000€',
      description: 'Siège GAMER toilette assise confort',
      avis: '⭐⭐⭐⭐'
    },
    {
      image: 'https://m.media-amazon.com/images/I/71VpOJXp6SL._AC_SX425_.jpg',
      id: 1,
      titre: 'siège gamer actif',
      prix: '300€',
      description: 'Siège GAMER toilette assise confort, pour ne jamais perdre le fil de la pensée',
      avis:'⭐⭐⭐⭐'
    },
    {
      image: 'https://m.media-amazon.com/images/I/61VCgjuzB1L._AC_SX425_.jpg',
      id: 2,
      titre: 'Siège Gamer',
      prix: '70€',
      description: 'toilette e-tech basic',
      avis: '⭐⭐⭐'
    },
    {
      image:
        'https://cdn.manomano.com/images/images_products/9440946/P/17699921_1.jpg',
      id: 3,
      titre: 'siège Gamer  ',
      prix: '2000€',
      description: 'Siège GAMER toilette assise confort',
      avis: '⭐⭐⭐⭐'
    },
  ];
// Je crée une fiche produits
export default function Produit() {
    const listeProduits = produits.map((produit) => (
        <CardProduit 
            key={produit.id}
            image={produit.image}
            prix={produit.prix}
            titre={produit.titre}
            description={produit.description}
            avis={produit.avis}
            />
    ))
    return <div className='parent'>    
      {listeProduits}</div>;
}
