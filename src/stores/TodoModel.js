import { observable, action } from 'mobx'

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
        document.getElementById(this.id).remove()
        this.completed = true
    }
}