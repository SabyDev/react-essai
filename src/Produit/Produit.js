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
const produits = [
    {
      image: 'https://i.pinimg.com/originals/96/a0/f7/96a0f781726056493714783f2e094c34.jpg',
      id: 1,
      titre: 'siège gamer très actif',
      prix: '300€',
      description: 'Siège GAMER toilette assise confort',
      avis:'⭐⭐⭐⭐'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkweyEs1FWWhHggwTL1jLDb48RL1F3yhCjJp3Ox6RdI80WecO1LVlhQOwPPrvvoenMfog&usqp=CAU',
      id: 2,
      titre: 'toilettes Gamer',
      prix: '70€',
      description: 'toilette e-tech',
      avis: '⭐⭐⭐'
    },
    {
      image:
        'https://static-pepper.dealabs.com/comments/raw/PSPyv/35694512_1/fs/1090x545/qt/80/35694512_1.jpg',
      id: 3,
      titre: 'siège gamer travailler ',
      prix: '120€',
      description: 'Siège GAMER toilette assise confort',
      avis: '⭐⭐⭐⭐'
    },
  ];

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
    return listeProduits;
}
