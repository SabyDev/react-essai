import './Contact.css';
import React from 'react';
import { useState } from 'react';



export default function Contact (){
        const[name,setName]= useState("");
        const[firstName,setFirstName]= useState("");
        const[PugName,setPugName]= useState("");
        const[Email,setEmail]= useState("");
        const[Taille, setTaille] = useState("s");       
        
       const validationTaille = (event) => {
        event.preventDefault ();
        alert (`Vous avez selectionner la taille : ${Taille}  valider ?`)
   }
    return (
        <div className="formulaire">
        <h1>Contact</h1>
        <form className='champs' onSubmit={validationTaille}>
            <label >Nom : 
                <input type="text"
                value={name} 
                onChange={(element) => setName(element.target.value)} required/>
            </label>
            <label>Prénom :  
                <input type="text"
                value={firstName} 
                onChange={(element) => setFirstName(element.target.value)} required/>
            </label>
            <label>Nom du Pug : 
                <input type="text"
                value={PugName} 
                onChange={(element) => setPugName(element.target.value)}required/>
            </label>
            <label>Email : 
                <input type="text"
                value={Email} 
                onChange={(element) => setEmail(element.target.value)}required/>
            </label>
            <label>
          Choisir la taille de votre Pug:
          <select value={Taille}
           onChange={(element) => setTaille(element.target.value)}required>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </label>
        
            <input type="submit" />
        </form>

        </div>
    )
}
