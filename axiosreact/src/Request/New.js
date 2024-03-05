import axios from "axios";
import React from "react";


export default function New() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get('https://dummy.restapiexample.com/api/v1/employees').then((response) => {
      setPost(response.data);
    });
  }, []);

  function createPost() {
    axios
      .post('https://dummy.restapiexample.com/api/v1/create', {
        name : 'Suhan' ,
        salary : 98200 ,
        age : 25 
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  function updatePost() {
    axios
      .put(`https://dummy.restapiexample.com/public/api/v1/update/21`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  function deletePost() {
    axios
      .delete(`https://dummy.restapiexample.com/public/api/v1/delete/2`)
      .then(() => {
        alert("Post deleted!");
        setPost(null)
      });
  }


  if (!post) return null;

  return (
    <div>
   
      <button onClick={createPost}>Create Post</button>
      <button onClick={updatePost}>Update Post</button>
      <button onClick={deletePost}>Delete Post</button>



    </div>
  );
}