import React, { Component } from "react";
import PropTypes from "prop-types";

class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }

  render() {
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <h2>Last Name: {this.props.lastName}</h2>
        <h3>Email: {this.props.email}</h3>
        <h4>Status: {this.state.status ? "Disconnected" : "Connected"}</h4>
        <button onClick= {this.changeStatus}> Change Status </button> 
      </div>
    );
    }
  changeStatus = () => {
   if(this.state.status === false){
     this.setState(()=>({
       status: true
     }))
   }
   else{
    this.setState(()=>({
      status: false
    }))
  }
  }
}
  
  

Contacto.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
};


export default Contacto;
