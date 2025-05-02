import React from "react";

class UserComponent extends React.Component{

    constructor(props){
super(props);
this.state= {
count: 0,
count1:1,

};
console.log('child constructor')
    }

    componentDidMount(){
        console.log('child mount')
    }
    render(){
        console.log('child render')
        const {name, age}= this.props;
        // const {age}= this.props;
        const {count, count1} = this.state;
        return(
            <div className="user-card">
            <h3>count: {count}</h3>
            <h3><button onClick={() =>{
                this.setState({
                    count: this.state.count + 1,
                  
                }
                )
            }}>Count Increase</button></h3>
                <h2>Name:{name}</h2>
                <h3>Location: Kolkata</h3>
                <h3>Age: {age}</h3>
            </div>
        )
    }
}

export default UserComponent;

// Props is a special keyword in React that stands for properties and is used for passing data from one component to another. 