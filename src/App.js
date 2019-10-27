import React, { Component } from 'react'
import './App.css';
import TodoEntry from './components/TodoEntry'
import TodoItems from './components/TodoItems'

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <section className="todoapp">
          <TodoEntry />
          <TodoItems />
        </section>
      </div>
    )
  }
}
