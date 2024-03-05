import axios from "axios";
import React from "react";


export default function Get() {
  // const [name, setName] = React.useState(null);
  // const [salary, setSalary] = React.useState(null);
  // const [age, setAge] = React.useState(null);

  React.useEffect(() => {
    axios.get('https://dummy.restapiexample.com/api/v1/employees').then((response) => {
      console.log(response.data);
    });
  }, []);
  return (
    <div>
<h1>Hello world</h1>
</div>
  );
}