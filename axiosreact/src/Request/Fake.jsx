import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'
import Table from 'react-bootstrap/Table';



function Fake() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then(response => 
        setData(response.data))
      }, []);

  return (
    <div>
      <Table striped>

      <thead>
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>PRICE</th>
                        <th>Description</th>
                        <th>Image</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((data, index) => {
                            return <tr key ={index}>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.price}</td>
                                <td>{data.description}</td>
                                <td>{data.image}</td>
                                <td>{data.category}</td>
                            </tr>
                        })
                    }
                    {/* <button onClick={createUser}>Add User</button> */}
                 </tbody>
                    </Table>
    </div>
  )
}

export default Fake
