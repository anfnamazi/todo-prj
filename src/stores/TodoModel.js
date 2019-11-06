import { observable, action } from 'mobx'
import TodoStore from '../stores/TodoStore'

export default class TodoModel {
    store
    id
    @observable title
    @observable completed

    constructor(store, title, completed, id) {
        this.store = store
        this.completed = completed
        this.id = id
        this.title = title
    }

    @action
    toggle() {
        this.completed = !this.completed
    }
    @action
    close() {
        TodoStore.todos = TodoStore.todos.filter(todo => todo.id !== this.id)
    }
}