import React, { useState } from 'react';
import axios from 'axios';

function Employe() {
    const [employeeData, setEmployeeData] = useState({
        name: '',
        salary: '',
        age: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmployeeData({ ...employeeData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://dummy.restapiexample.com/api/v1/create', employeeData);
            console.log('Success:', response.data);
            alert('Employee created successfully!');
            // Clear form fields after successful submission
            setEmployeeData({
                name: '',
                salary: '',
                age: ''
            });
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the employee.');
        }
    };

    return (
        <div>
            <h1>Create Employee</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={employeeData.name}
                    onChange={handleChange}
                    required
                /><br/><br/>

                <label htmlFor="salary">Salary:</label>
                <input
                    type="number"
                    id="salary"
                    name="salary"
                    value={employeeData.salary}
                    onChange={handleChange}
                    required
                /><br/><br/>

                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={employeeData.age}
                    onChange={handleChange}
                    required
                /><br/><br/>

                <button type="submit">Create Employee</button>
            </form>
        </div>
    );
}

export default Employe;








































































// import React from 'react'
// import axios from "axios";

// function Employe() {
//     const [employees, setEmployees] = React.useState(null);

// //   React.useEffect(() => {
// //     axios.get('https://dummy.restapiexample.com/api/v1/employees').then((response) => {
// //       setEmployees(response.data);
// //     });
// //   }, []);

//   function createEmployees() {
//     axios
//       .post('https://dummy.restapiexample.com/api/v1/employees', {
//         employee_name: employeeName,
//         employee_salary: employeeSalary,
//         employee_age: employeeAge
//       })
//       .then((response) => {
//         setEmployees(response.data);
//       });
//   }

// //   if (!employees) return "No post!"

//   return (
//     <div>
//         {/* <p>{employees.name}</p>
//         <p>{employees.salary}</p>
//         <p>{employees.age}</p> */}
//       {/* <p>{employees.id}</p>
//       <p>{employees.employee_name}</p>
//       <p>{employees.employee_salary}</p>
//       <p>{employees.employee_age}</p>
//       <p>{employees.profile_image}</p> */}
//       <p>{employees.employeeName}</p>
//       <p>{employees.employeeAge}</p>
//       <p>{employees.employeeSalary}</p>
//       <button onClick={createEmployees}> Create </button>
//     </div>
//   )
// }

// export default Employe;
