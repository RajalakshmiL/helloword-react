import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            count2 : 1
        }
        console.log("Child Constructor");
    }

    componentDidMount(){
        console.log("Child Component Did MOunt");
    }

    componentDidUpdate(){
        console.log("component Update");
    }
    
    componentWillUnmount(){
        console.log("component will unmount");
    }
    render(){
        console.log("Child Render");
        const {name,location} = this.props;
        const {count} = this.state;
        return <div>
            <h2>THis is {name}</h2>
            <h4>From {location}</h4>
            <h5>Count = {count}</h5>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1,
                })
            }}>Count Inc</button>
            <h4>Developing the Projects</h4>
        </div>
    }
}

export default UserClass;