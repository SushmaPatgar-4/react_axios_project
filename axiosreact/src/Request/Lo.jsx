// import React, { useState } from 'react';
// import axios from 'axios';

// function Lo() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await axios.post('http://microapi.syncode.in/auth/login', {
//         username: "ganesh@gmail.com",
//         password: "password"
//       });

//       // Assuming the response contains a token or some indication of successful login
//       console.log('Login successful:', response.data);
//       // Redirect to dashboard or perform other actions upon successful login
//     } catch (err) {
//       setError('Invalid username or password');
//       console.error('Login error:', err);
//     }
//   };

//   return (
//     <div>
//       <h2>Login Page</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Username:</label>
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit">Login</button>
//         {error && <div style={{ color: 'red' }}>{error}</div>}
//       </form>
//     </div>
//   );
// }

// export default Lo;










import React, { useState } from 'react';
import axios from 'axios';

function Lo() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [age, setAge] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!username || !password)
        {alert("Enter Email and Password");return}
       /// try {
            const response = await axios.post(
                 'https://dummy.restapiexample.com/api/v1/create',
                {
                    username:username,
                    password:password
                }
            );
            if(username==="ganesh@gmail.com" && password==="password")
            {
                alert("Login successfull");
            }
            else
            {
                alert("Please Try Again");
          
            }
        //     console.log(response.data);
        //     alert('Login successfully');
        //     // You can redirect or perform any other action here after successful creation
        //  } catch (error) {
        //      console.error( error);
        //     alert('An error occurred while login the user.');
        // }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /><br/><br/>

                <label htmlFor="Password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                /><br/><br/>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Lo;
