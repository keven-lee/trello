import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import List from './List';


export default class Board extends Component { 
  constructor(props) {
    super(props);
    this.state = { item: '' }
  }
  
    
    handleSubmit (event) {
      
    }
    
   render() {
    return (
      <div>
        <h1>Board</h1>
        <ul>Sample List 1
        <li>Card 1</li>
        <li>Card 2</li>
        <li>Card 3</li>
        </ul>
     <form onSubmit={this.handleSubmit.bind(this)}> <input type='text' ref='item'  onChange={ event => this.onInputChange(event.target.value) }
        value={this.state.item}/> 
        <button> Add List </button>  
     </form>
      </div>
    );
  }

  onInputChange(item) {
    this.setState({item});
  }
}