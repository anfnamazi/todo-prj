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
        for (var i = 0; i < TodoStore.todos.length;) {
            if (TodoStore.todos[i].id === this.id) {
                TodoStore.todos.splice(i, 1)
            } else {
                i++
            }
        }
    }
}