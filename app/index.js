import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';

class App extends Component {
    
 

render() {
    return (
        <Board />
    
    );
  }
}
        
ReactDOM.render(<App />, document.getElementById('app'));