import './Contact.css';
import React from 'react';
import { useState } from 'react';



export default function Contact (){
        const[name,setName]= useState("");
        const[firstName,setFirstName]= useState("");
        const[PugName,setPugName]= useState("");
        const[Email,setEmail]= useState("");

        const validation = (event) => {
            event.preventDefault ();
            alert (`'Votre prénom est' : ${firstName}`)
       }
    return (
        <div className="formulaire">
        <h1>Contact</h1>
        <form className='champs' onSubmit={validation}>
            <label >Nom : 
                <input type="text"
                value={name} 
                onChange={(element) => setName(element.target.value)}/>
            </label>
            <label>Prénom :  
                <input type="text"
                value={firstName} 
                onChange={(element) => setFirstName(element.target.value)}/>
            </label>
            <label>Nom du Pug : 
                <input type="text"
                value={PugName} 
                onChange={(element) => setPugName(element.target.value)}/>
            </label>
            <label>Email : 
                <input type="text"
                value={Email} 
                onChange={(element) => setEmail(element.target.value)}/>
            </label>
            <input type="submit" />
        </form>

        </div>
    )
}
