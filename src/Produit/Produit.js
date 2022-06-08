import './Produit.css'

const Produits = [
   {name: '🍎 pomme' , quantity: 1},
   {name: '🍎 poire' , quantity: 2},
   {name: '🍈 melon ', quantity: 3},
   {name: '🍇 raisin' , quantity: 4},
   {name: '🍒 cerise' , quantity: 5}
]
const fruits =[Produits.quantity]
function plus (){
fruits.map((fruit) => fruit++)
}
export default function Produit(){
    return(
      <div className='Produit'>
          {Produits.map(
              produit => (
                  <li key= {produit} onClick={plus}>{produit.name} {produit.quantity}</li>
              )  
          )            
          }
          
      </div>  
    )
}