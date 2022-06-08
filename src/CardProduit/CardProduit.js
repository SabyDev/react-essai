import './CardProduit.css';
export default function CardProduit(props){
    return( 
        <figure>
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


