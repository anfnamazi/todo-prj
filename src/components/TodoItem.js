import React, { Component } from 'react'
import {observer} from 'mobx-react'

@observer
export default class TodoItem extends Component {
    onToggle=()=>{
        this.props.todo.toggle()
    }
    onClose=()=>{
        this.props.todo.close()
    }
    render() {
        const { todo } = this.props
        return (
            <li className={todo.completed ? 'completed' : ' '} id={todo.id}>
                <div className="view">
                    <input
                    onChange={this.onToggle}
                    className="toggle" type="checkbox" value="on" checked={todo.completed} />
                    <label>{todo.title}</label>
                    <button className="destroy" onClick={this.onClose}></button>
                </div>
            </li>
        )
    }
}
