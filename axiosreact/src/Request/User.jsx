import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './User.css'
// import {Table} from 'react-bootstrap/Table';



function User() {
    const[user , setUser] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setUser(response.data))
        .catch(error => console.log(error));
    },[])



  return (
    <div className='container'>
        <div className='box'>
            <h3>Fetch data from API in react with Axios</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((user, index) => {
                            return <tr key ={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        })
                    }
                    {/* <button onClick={createUser}>Add User</button> */}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default User




































// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

// export default function User() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }












// import React from 'react'
// import axios from 'axios'

// const baseUrl = 'https://jsonplaceholder.typicode.com/users'
// function User() {
//     const[user , setUser]=React.useState('')

//     React.useEffect(() => {
//         axios.get(baseUrl).then((response) => {
//             setUser(response.data)
//         });
//     }, [] );
//     if(!user) return null ;
//   return (
//     <div>
//       <h2> User's List</h2>
//       <table>
//         <div className='list'>
//             <div className='box'>
//                 {user.map((user,index) => {
//                                  <div className='bdy' key={user.id}></div>
 
//                 })}
//                 <div className='u2'>{user.name}</div>
//                 <div className='u3'>{user.username}</div>
//                 <div className='u4'>{user.email}</div>
//                 {/* <div className='u5'>{user.address}</div> */}
//             </div>
//         </div>
//       </table>
//     </div>
//   )
// }

// export default User;

