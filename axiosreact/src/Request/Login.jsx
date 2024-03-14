import React, {useState} from 'react';
import './Login.css';
import axios from 'axios';
const Login=()=>
{
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const handleSubmit=(e)=>

 {
        e.preventDefault();
        if(!email || !password)
        {alert("Enter Email and Password");return}
//https://dummy.restapiexample.com/api/v1/create
        axios.post('http://microapi.syncode.in/auth/login', {
            email:email,
            password:password
        })
        // console.log(response.data);
        
        
        if(email==="ganesh@gmail.com" && password==="password")
        {
            alert("Login successfull");
        }
        else
        {
            alert("Please Try Again");
      
        }
 }
    return(
        <>
        <div className='Login'>
        <form onSubmit={handleSubmit}>
        <h2 style={{fontweight:'bolder',fontFamily:'sans-serif',color:'blueviolet'}}>
          LOGIN PAGE
        </h2>
        <div className='box'>
        <div className='b1'>
        EMAIL:<br/><input type="email" name="email" placeholder="Enter your email id" onChange={(e)=>setEmail(e.target.value)}/><br/>
        </div>
        <div className='b2'>
        PASSWORD:<br/><input type="password" name="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        </div>
        
        <br/><button onClick={handleSubmit}>LOGIN</button> 
        </form>    
        </div>
        </>
    )
}
export default Login;










// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('/api/login', { username, password });
//       // Handle successful login (e.g., store token in localStorage)
//       console.log('Login successful:', response.data);
//     } catch (error) {
//       setError('Invalid username or password');
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         {error && <div style={{ color: 'red' }}>{error}</div>}
//         <div>
//           <label>Username:</label>
//           <input
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;



// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('ganesh@gmail.com');
//   const [password, setPassword] = useState('password');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       alert("Enter Email and Password");
//       return;
//     }

//     axios.post('http://microapi.syncode.in/auth/login', {
//       email: email,
//       password: password
//     })
//       .then(response => {
//         if (response.status === 200) {
//           alert("Login successful");
//         } else {
//           alert("Login failed");
//         }
//       })
//       .catch(error => {
//         console.error('There was an error!', error);
//         alert("Login failed");
//       });
//   };

//   return (
//     <>
//       <div className='Login'>
//         <form onSubmit={handleSubmit}>
//           <h2 style={{ fontWeight: 'bolder', fontFamily: 'sans-serif', color: 'blueviolet' }}>
//             LOGIN PAGE
//           </h2>

//           EMAIL:<br /><input type="email" name="email" placeholder="Enter your email id" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
//           PASSWORD:<br /><input type="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />

//           <br /><button type="submit">LOGIN</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Login;

















