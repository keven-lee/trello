import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import List from './components/List';

class App extends Component {
    
 

render() {
    return (
        <div>
            <Board />
            
        </div>
    );
  }
}
        
ReactDOM.render(<App />, document.getElementById('app'));