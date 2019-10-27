import React, { Component } from 'react'
import {observer} from 'mobx-react'

@observer
export default class TodoItem extends Component {
    onToggle=()=>{
        this.props.todo.toggle()
    }
    render() {
        const { todo } = this.props
        return (
            <li className={todo.completed ? 'completed' : ' '}>
                <div className="view">
                    <input
                    onChange={this.onToggle}
                    className="toggle" type="checkbox" value="on" checked={todo.completed} />
                    <label>{todo.title}</label>
                    <button className="destroy"></button>
                </div>
            </li>
        )
    }
}
