import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const baseURL = "https://dummy.restapiexample.com/api/v1/create";



function Student() {
    const[user , setUser] = useState([])
    useEffect(() => {
        axios.get(`${baseURL}/1`)
        .then(response => setUser(response.data))
        .catch(error => console.log(error));
    },[])

    function createUser() {
      axios.post(baseURL,  {
          title: "Hello World!",
          body: "This is a new post."
        })
        .then((response) => {
          setUser(response.data);
        });
    }
  
    if (!post) return "No post!"

  return (
    
      < div className='container'>


             <h3>Fetch data from API in react with Axios</h3>
            <Table striped bordered hover>
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
            </Table>  
                    <button onClick={createUser}>Create User</button>
        
    </div>
    
  )
}

export default Student
