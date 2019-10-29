import React, { Component } from 'react'
import TodoItem from './TodoItem'
import TodoStore from '../stores/TodoStore'
import { observer } from 'mobx-react'
import TodoFooter from './TodoFooter'

@observer
class TodoItems extends Component {
    onCloseAll = () => {
        for (var i = 0; i < TodoStore.todos.length;) {
            if (TodoStore.todos[i].completed === true) {
                TodoStore.todos.splice(i, 1)
            } else {
                i++
            }
        }
    }

    render() {
        console.log(TodoStore.todos.length)
        return (
            <section class="main">
                <ul class="todo-list">
                    {
                        TodoStore.todos.map(todo => {
                            return (
                                <TodoItem todo={todo} />
                            )
                        })
                    }
                </ul>
                <TodoFooter onClick={this.onCloseAll} />
            </section>
        )
    }
}

export default TodoItems