import React, { Component } from 'react'
import './App.css';
import TodoEntry from './components/TodoEntry'
import TodoItems from './components/TodoItems'
import TodoFooter from './components/TodoFooter'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="todoapp">
          <TodoEntry />
          <TodoItems />
          <TodoFooter />
        </section>
      </div>
    )
  }
}
