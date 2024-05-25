import { useState } from "react";
const Users = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return <div>
      
        <h2>THis is {props.name}</h2>
        <h4>From {props.location}</h4>
        <h5>count= {count}</h5>
        <h5>count2= {count2}</h5>
        <h4>Developing the Projects</h4>
    </div>
}

export default Users;