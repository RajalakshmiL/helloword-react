import { Component } from "react";
import Users from "./User";
import UserClass from "./UserClass";

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Component Did MOunt");
    }

    render(){
        console.log("Parent Render");
        return <div>
        <h1>About class Component</h1>
        <h1>This is React</h1>
        {/* <Users name="Rajalakshmi" location="Chennai"/> */}
        <UserClass name="Rajalakshmi (Class)" location="Bangalore"></UserClass>
        <UserClass name="Second (Class)" location="Bangalore"></UserClass>
    </div>
    }
}

export default About;