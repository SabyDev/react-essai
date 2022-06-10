import './Produit.css'
import CardProduit from '../../Components_pages/CardProduit/CardProduit';

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
      image: 'https://m.media-amazon.com/images/I/61Mzi10F24L._AC_SX425_.jpg',
      id: 1,
      titre: 'Dark Vador',
      prix: '30€',
      description: 'Déguisement pour Pug.',
      avis:'⭐⭐⭐⭐'
    },
    {
      image: 'https://jamaissansmaurice.com/wp-content/uploads/2014/09/starwars-costume-dewback-pour-chien.jpg',
      id: 2,
      titre: 'stormtroopers',
      prix: '70€',
      description: 'Déguidement pour Pug',
      avis: '⭐⭐⭐'
    },
    {
      image:
        'https://m.media-amazon.com/images/I/812vDF+PCKL._AC_SX466_.jpg',
      id: 3,
      titre: 'Maître Yoda ',
      prix: '40€',
      description: 'Déguidement pour Pug',
      avis: '⭐⭐⭐⭐'
    },
    {
      image: 'https://www.boutiqusedisney.com/media/catalog/product/cache/1/image/9b11fff56e790d956f21bc4068412cd6/2/8/2842046580002m/disney-store-deguisement-clochette-pour-chiens-pas-cher-31.jpg',
      id: 1,
      titre: 'Fée Clochette',
      prix: '30€',
      description: 'Déguidement pour Pug',
      avis:'⭐⭐⭐⭐'
    },
    {
      image: 'https://static.weezbe.com/cmachambre/Images/products/p_3106G_210426171553.jpg',
      id: 2,
      titre: 'Cow Boy',
      prix: '25€',
      description: 'Déguidement pour Pug',
      avis: '⭐⭐⭐'
    },
    {
      image:
        'https://www.cdiscount.com/pdt2/1/7/8/3/550x550/auc3664996339178/rw/deguisement-pour-chien-joueur-de-guitare-costume.jpg',
      id: 3,
      titre: 'Guitariste',
      prix: '20€',
      description: 'Déguidement pour Pug',
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
   
    return (
    <div>
      <h1>Déguisements</h1>
    <div className='parent'>           
      {listeProduits}</div>
      </div>);
}


