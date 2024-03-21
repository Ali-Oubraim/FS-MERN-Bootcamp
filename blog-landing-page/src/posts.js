import { response } from "express";

// const fetchPosts =async ()=>{
//     const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const res = response.json();
//     if (res) {
        
//     } else {
        
//     }
// }
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));