import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';



class App extends Component {

  render() {
    return (
      <div  className="App">
        <div className="todo-wrapper">
        <Header />
        <TodoInput />
        </div>
       </div>
    );
  }
}

export default App;
