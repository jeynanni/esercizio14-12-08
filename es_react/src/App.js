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
        {this.state.myArray.map((item,index) => <Array  key={index.toString()} id={item.id} name={item.name}/>)}
        
      </div>
    );
  }
}

export default App;
