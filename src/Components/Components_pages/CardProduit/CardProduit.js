import '../CardProduit/CardProduit.css';
export default function CardProduit(props){
    return( 
        // je crée une figure
        <figure>
            {/* je mets mes éléments et j'appelle les props */}
        <img className='photo' src={props.image} alt="" />
        <figcaption>
        <h2>{props.titre}</h2>            
        <p className='descrip'>{props.description}</p>
        <div className='price'>{props.prix}</div>
        <div className='avis'>{props.avis}</div>
     </figcaption>
        </figure>
    )
}


