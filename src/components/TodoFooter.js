import React, { Component } from 'react'
import { observer } from 'mobx-react'
import TodoStore from '../stores/TodoStore'

@observer
export default class TodoFooter extends Component {

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
                        })}{TodoStore.todos.length-x}</strong> item left</span>
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
                    <button className="clear-completed" onClick={this.props.onClick}>Clear completed</button>
                </footer>
            </div>
        )
    }
}
