import React, { Component } from 'react';
import './Array.css'

class Array extends Component {
    
    render() {
      return (
        <div className="Array">
        <div> {this.props.id} {this.props.name}</div>
          
        </div>
      );
    }
  }
export default Array