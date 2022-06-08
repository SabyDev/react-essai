import './Produit.css'

const Produits = [
   {name: '🍎 pomme' , quantity: 1},
   {name: '🍎 poire' , quantity: 2},
   {name: '🍈 melon ', quantity: 3},
   {name: '🍇 raisin' , quantity: 4},
   {name: '🍒 cerise' , quantity: 5}
]

function moins (){
    for(let i = [Produits.quantity]; i>[Produits.quantity]; i++ ){
         i--
    }
    console.log(moins);
}
export default function Produit(){
    return(
      <div className='Produit'>
          {Produits.map(
              produit => (
                  <li key= {produit} onClick={event => ({moins})}>{produit.name} : {produit.quantity}</li>
              )  
          )            
          }
          
      </div>  
    )
}