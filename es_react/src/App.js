import React, { Component } from 'react';

import './App.css';
import Array from './components/Array'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
        myArray : [ 
            {
                id : 1,
                name : 'brian'
            },
            {
                id : 2,
                name : 'kevin'
            },
            {
                id : 3,
                name : 'nick'
            }
    ]}
}
  render() {
    return (
      <div className="App">
        {this.state.myArray.map(myArray => <Array id={myArray.id} name={myArray.name}/>)}
        
      </div>
    );
  }
}

export default App;
