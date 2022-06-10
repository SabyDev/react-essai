// J'importe le css du header 
import '../Post/Post.css'
// j'importe les Hooks 
import { useState, useEffect } from 'react'
import axios from 'axios';

export default function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect((req, res) =>{
        axios
        .get ("https://jsonplaceholder.typicode.com/posts")
        .then((response) => setPosts(response.data))
        .catch((error) => {
            return res.status(400).json({ error: "plantage total" });
          });
    },[])
    
   return(  
   <div className="posts">
   <h1>Posts de Blog</h1>
   <ul>
 {  
  posts.map((post)=>   
    <li key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
         </li>
         )  
         } 
   </ul>
   </div>)
}