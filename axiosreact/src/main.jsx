import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import User from './Request/User.jsx'
import Student from './Request/Student.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <User/>
    {/* <Student/> */}
  </React.StrictMode>,
)
