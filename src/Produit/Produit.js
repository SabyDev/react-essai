import './Produit.css'


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

export default function Produits (props) {
    return (
        <div className='msg'>
        <img className='photo' src={props.img} alt="" />
        <h2>{props.titre}</h2>            
        <p className='descrip'>{props.description}</p>
        <div className='price'>{props.price}</div>
        <div className='avis'>{props.avis}</div>
        </div>
    )
    }