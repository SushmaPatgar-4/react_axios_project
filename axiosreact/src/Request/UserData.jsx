import React from 'react'
export default UserData;

 const UserData=({users})=> {
 return (

    {
    users.map((cuUser) => {
        const {id , name , email } = cuUser;
        return(
            <tr key ={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{body}</td>
            </tr>
        )
    }
    
    

 )
}
 }
