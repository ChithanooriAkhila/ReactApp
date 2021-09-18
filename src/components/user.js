/*const User=(props)=>{
    return (
        <div>
            <h1>
                {props.name}
            </h1>
            <h4>{props.desc}</h4>
        </div>
    );
};
export default User;*/



import React from 'react';
class User extends React.Component{
    constructor(props){
        super(props);

        this.state={
            planet:"earth",
        };
        console.log("hey i am fron constructor")
    }
    componentDidMount() {
        this.setState({ planet: "Mars" });
        this.setState({ planet: "jupiter" });
      }
    
    
      shouldComponentUpdate(nextProp, nextState) {
        console.log("from shouldComponentUpdate");
        console.log({
          nextProp,
          nextState,
        });
        return true;
      }
    
      getSnapshotBeforeUpdate(prevProp, prevState) {
        console.log("from getSnapshotBeforeUpdate");
        console.log({ prevProp, prevState });
        return true;
      }
    
      componentDidUpdate() {
        console.log(this.state);
      }
    render(){
        console.log("render")
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.desc}</p>
                <h4>{this.state.planet}</h4>
            </div>
        );
    }
}
export default User;