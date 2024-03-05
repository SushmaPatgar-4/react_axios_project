import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
function CrtForm() {
    const [employee , setEmployee]=useState({
        Name : ' ',
        Age:' ',
        Salary: ' '
    })
    const handleInput = (event) => {
        setEmployee({...employee , [event.target.name]:event.target.event})
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post('https://dummy.restapiexample.com/api/v1/create' , {employee})
        // .then(response => console.log('Success:', response.data)
        //   alert('Employee created successfully!')
        //   )
          .then((response) => {
            setEmployee('Success:' , response.data);
            alert('Employee created successfully !!')
          })
        .catch(error => console.error('Error:', error )
            // alert('An error occurred while creating the employee.')
            )
    }

   
    
  return (
    <div>
      <div>
        <form>
            <h1>Create Employee </h1>
            Name: <input type='text' onChange={handleInput} name='Name'></input><br/><br/>
            Age: <input type='number' onChange={handleInput} name='Age'></input><br/><br/>
            Salary: <input type='number' onChange={handleInput} name='Salary'></input><br/><br/>
            <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CrtForm
