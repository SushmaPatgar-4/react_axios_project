import axios from "axios";
import React from "react";


export default function Delete() {

  function deletePost() {
    axios
      .delete(`https://dummy.restapiexample.com/public/api/v1/delete/3`)
      .then(() => {
        alert("Post deleted!");
        console.log("Delete data successfully")
      });
  }


  return (
    <div>
   
      <button onClick={deletePost}>Delete Post</button>
    </div>
  );
}