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
    @observable allLi = document.getElementsByTagName('li')
    @action
    showAll = () => {
        for (let i = 0; i < this.allLi.length; i++) {
            this.allLi[i].classList.remove('hidden')
        }
    }
    @action
    showActive = () => {
        for (let i = 0; i < this.allLi.length; i++) {
            if (this.allLi[i].classList.contains('completed')) {
                this.allLi[i].classList.add('hidden')
            } else {
                this.allLi[i].classList.remove('hidden')
            }
        }
    }
    @action
    showCompelted = () => {
        for (let i = 0; i < this.allLi.length; i++) {
            if (this.allLi[i].classList.contains('completed')) {
                this.allLi[i].classList.remove('hidden')
            } else {
                this.allLi[i].classList.add('hidden')
            }
        }
    }
}

const store = new TodoStore()
export default store