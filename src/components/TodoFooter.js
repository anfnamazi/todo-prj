import React, { Component } from 'react'
import { observer } from 'mobx-react'
import TodoStore from '../stores/TodoStore'

@observer
export default class TodoFooter extends Component {

    onClearCompleted = () => {
        TodoStore.clearCompleted()
    }

    onShowActive = () => {
        TodoStore.showActive()
    }

    onShowCompelted = () => {
        TodoStore.showCompelted()
    }

    onShowAll = () => {
        TodoStore.showAll()
    }

    render() {
        let x = 0
        return (
            <div>
                <footer className="footer">
                    <span className="todo-count"><strong>{
                        TodoStore.todos.map(todo => {
                            if (todo.completed) {
                                x++
                            }
                        })}{TodoStore.todos.length - x}</strong> item left</span>
                    <ul className="filters">
                        <li>
                            <a className="selected" href="#/" onClick={this.onShowAll}>All</a>
                        </li>
                        <li>
                            <a href="#/active" onClick={this.onShowActive}>Active</a>
                        </li>
                        <li>
                            <a href="#/completed" onClick={this.onShowCompelted}>Completed</a>
                        </li>
                    </ul>
                    <button className="clear-completed" onClick={this.onClearCompleted}>Clear completed</button>
                </footer>
            </div>
        )
    }
}
