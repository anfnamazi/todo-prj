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
          <footer className="footer">
            <span className="todo-count"><strong>0</strong> item left</span>
            <ul className="filters">
              <li>
                <a className="selected" href="#/">All</a>
              </li>
              <li>
                <a href="#/active">Active</a>
              </li>
              <li>
                <a href="#/completed">Completed</a>
              </li>
            </ul>
            <button className="clear-completed">Clear completed</button>
          </footer>
        </section>
      </div>
    )
  }
}
