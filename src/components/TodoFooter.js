import React, { Component } from 'react'
import { observer } from 'mobx-react'
import TodoStore from '../stores/TodoStore'

@observer
export default class TodoFooter extends Component {

    state={
        ifOne:true,
        ifTwo:false,
        ifThree:false
    }

    onClearCompleted = () => {
        TodoStore.clearCompleted()
    }

    onShowActive = () => {
        TodoStore.showActive()
        this.setState({ifOne:false,ifTwo:true,ifTree:false})
    }

    onShowCompelted = () => {
        TodoStore.showCompelted()
        this.setState({ifOne:false,ifTwo:false,ifTree:true})
    }

    onShowAll = () => {
        TodoStore.showAll()
        this.setState({ifOne:true,ifTwo:false,ifTree:false})
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
                            <a className={this.state.ifOne?'selected':''} href="#/" onClick={this.onShowAll}>All</a>
                        </li>
                        <li>
                            <a className={this.state.ifTwo?'selected':''} href="#/active" onClick={this.onShowActive}>Active</a>
                        </li>
                        <li>
                            <a className={this.state.ifTree?'selected':''} href="#/completed" onClick={this.onShowCompelted}>Completed</a>
                        </li>
                    </ul>
                    <button className="clear-completed" onClick={this.onClearCompleted}>Clear completed</button>
                </footer>
            </div>
        )
    }
}
