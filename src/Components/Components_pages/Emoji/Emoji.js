// J'importe le css du header 
import './Emoji.css'
const montrerEmoji = event => alert(event.target.id);
//

//  On crÃ©e un tableau avec les emoji et on donne des noms aux emoji
const emojis = [
{
    emoji : "ð",
    name :"excellent"
},
{
    emoji : "ð",
    name :"bien"
},
{
    emoji : "ð©",
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

