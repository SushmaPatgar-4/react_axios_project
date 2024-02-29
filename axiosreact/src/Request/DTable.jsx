import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css'
import {Table} from 'bootstrap'

function DTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => 
    setData(response.data))
  }, []);

  function createPost() {
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: "Hello World!",
        bdy: "This is a new post."
      })
      .then((response) => {
        setData(response.data);
      });
  }

  if (!data) return "No post!"

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  //     setData(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  return (
    <div>
      <h1>Axios Practices</h1>
        
      <div className='Grid'>
          {
          data.map((post) => {
            const {id , title ,body} =post;
            return(
              <div className='card' key={id}>
                <h2>{title.slice(0,15).toUpperCase()}</h2>
                <p>{body.slice(0 , 100)}</p>
                </div>
            )
            
          })}
          <button onClick={createPost}>Create Post</button>
        </div>
          </div>
    
  );
}

export default DTable;
