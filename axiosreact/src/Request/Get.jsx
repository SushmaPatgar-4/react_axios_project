import axios from "axios";
import React, { useState } from "react";


export default function Get() {
  // const [name, setName] = React.useState(null);
  // const [salary, setSalary] = React.useState(null);
  // const [age, setAge] = React.useState(null);
  const [employees , setEmployees]=useState( null )

  React.useEffect(() => {
    axios.get('https://dummy.restapiexample.com/api/v1/employees').then((response) => {
      setEmployees(response.data);
    });
  }, []);
  if (!employees) return null ;
  return (
    <div>
<h1>Hello world</h1>
<p>{employees}</p>
</div>
  );
}