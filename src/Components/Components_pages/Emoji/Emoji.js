import './Emoji.css'
const montrerEmoji = event => alert(event.target.id);
// export default function Emoji(){
//     return (
//       <ul>
//           <li>
//               <button onClick={event => alert(event.target.id)} >
// <span id='excellent'> 😎 </span>
// </button >
//           </li>
//           <li>
//           <button onClick={montrerEmoji} >
// <span id='bien'>  🙂  </span>
// </button>
//           </li>
//           <li>
//               <button onClick={() => alert("cliqué !")} >
// <span id='bad'>  😩  </span>
// </button>
//           </li>
//       </ul>



//     )
// }
//  On crée un tableau avec les emoji et on donne des noms aux emoji
const emojis = [
{
    emoji : "😎",
    name :"excellent"
},
{
    emoji : "🙂",
    name :"bien"
},
{
    emoji : "😩",
    name :"bad"
}
]

export default function Emoji(){
    return(
        <>
        <ul>
           {
            emojis.map(emoji =>(
            <button onClick={event => alert (emoji.name)} key={emoji}>{emoji.emoji}</button> ))
            }</ul>
            </>
    )
}

// const planetes = [
//     "Terre",
//     "Saturne",
//     "Pluton"
// ];
// export default function Emoji(){
//     return (
//         <>
//         {planetes.map(planete => <div key={planete}>{planete}</div>)}
//             </>
//     )
// }