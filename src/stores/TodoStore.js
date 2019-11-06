import { observable, action } from "mobx";
import TodoModel from './TodoModel'

class TodoStore {
    @observable todos = []
    lastID = 0
    @action
    addTodo(title) {
        this.todos.push(new TodoModel(this, title, false, this.lastID++))
    }

    @action
    clearCompleted() {
        this.todos = this.todos.filter(todo => todo.completed === false)
    }

}

const store = new TodoStore()
export default store