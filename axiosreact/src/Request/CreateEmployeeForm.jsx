import React, { useState } from 'react';
import axios from 'axios';

function CreateEmployeeForm() {
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                'https://dummy.restapiexample.com/api/v1/create',
                {
                    name: name,
                    salary: salary,
                    age: age
                }
            );
            console.log('Success:', response.data);
            alert('Employee created successfully!');
            // You can redirect or perform any other action here after successful creation
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the employee.');
        }
    };

    return (
        <div>
            <h1>Create Employee</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Name">Employee Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                /><br/><br/>

                <label htmlFor="Salary">Employee Salary:</label>
                <input
                    type="number"
                    id="salary"
                    name="salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    required
                /><br/><br/>

                <label htmlFor="Age">Employee Age:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                /><br/><br/>

                <button type="submit">Create Employee</button>
            </form>
        </div>
    );
}

export default CreateEmployeeForm;
