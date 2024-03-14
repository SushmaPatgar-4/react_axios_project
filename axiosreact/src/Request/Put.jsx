import React, {  useState } from "react";
import axios from "axios";

function Put() {
    const [post , setPost] = useState(null)
    React.useEffect((e) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
          setPost(response.data);
        });
      }, []);
      function updatePost() {
        axios
          .patch(`https://jsonplaceholder.typicode.com/posts/1`, {
            title: "Hello World!!",
          })
          .then((response) => {
            console.log(response.data);
          });
      }
      if (!post) return null;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={updatePost}>Update</button>
    </div>
  )
}

export default Put
