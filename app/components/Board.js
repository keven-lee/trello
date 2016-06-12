import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import List from './List';


export default class Board extends Component { 
  constructor(props) {
    super(props);
      
    this.state = { term: '' }
    
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  
  onInputChange(event) {
        this.setState({ term: event.target.value });
  }
    
  onFormSubmit(event) {
      event.preventDefault();
      console.log(this.state.term);
      this.setState({ term: this.state.term});
      this.setState({ term: '' });
      return (
          <List />
      );
  }
    
   render() {
    return (
     <form onSubmit={this.onFormSubmit} className='form-inline'> 
         <input
            placeholder='Enter List Here'
            className='form-control col-xs-2'
            value={this.state.term}
            onChange={this.onInputChange} 
            />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-primary'> Add a List </button>
                </span>
    </form>
    );
  }
}