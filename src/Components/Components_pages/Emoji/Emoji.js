// J'importe le css du header 
import './Emoji.css'
const montrerEmoji = event => alert(event.target.id);
//

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

