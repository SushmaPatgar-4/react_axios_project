import axios from "axios";
import React from "react";


export default function Update() {
  // const [name, setName] = React.useState(null);
  // const [salary, setSalary] = React.useState(null);
  // const [age, setAge] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get(`${baseURL}/1`).then((response) => {
  //     console(response.data);
  //   });
  // }, []);
const updatedData = {
  name: 'Hima',
 
}
  function updatePost() {
    axios
      .patch(`https://dummy.restapiexample.com/public/api/v1/update/22`, updatedData)
      .then((response) => {
        console.log(response.data);
      });
  }

  // if (!post) return "No post!"

  return (
    <div>
      {/* <h1>{post.title}</h1>
      <p>{post.body}</p> */}
      <button onClick={updatePost}>Update Post</button>
    </div>
  );
}