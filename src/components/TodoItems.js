import React, { Component } from 'react'
import TodoItem from './TodoItem'
import TodoStore from '../stores/TodoStore'
import { observer } from 'mobx-react'
import TodoFooter from './TodoFooter'

@observer
class TodoItems extends Component {
    onCloseAll = () => {
        var allLi = document.getElementsByTagName("li")
        var allInputs = document.getElementsByTagName("input");
        for (var i = 0, max = allInputs.length; i < max; i++) {
            if (allInputs[i].checked == true)
                allLi[i - 1].classList.add('hidden')
        }
    }
    render() {
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