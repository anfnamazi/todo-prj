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
        clearInterval(this.interval2)
        clearInterval(this.interval)
        for (let i = 0; i < this.allLi.length; i++) {
            this.allLi[i].classList.remove('hidden')
        }
    }
    @action
    showActive = () => {
        clearInterval(this.interval2)
        this.interval = setInterval(() => {
            for (let i = 0; i < this.allLi.length; i++) {
                if (this.allLi[i].classList.contains('completed')) {
                    this.allLi[i].classList.add('hidden')
                } else {
                    this.allLi[i].classList.remove('hidden')
                }
            }
        })
    }
    @action
    showCompelted = () => {
        clearInterval(this.interval)
        this.interval2 = setInterval(() => {
            for (let i = 0; i < this.allLi.length; i++) {
                if (this.allLi[i].classList.contains('completed')) {
                    this.allLi[i].classList.remove('hidden')
                } else {
                    this.allLi[i].classList.add('hidden')
                }
            }
        })
    }
}

const store = new TodoStore()
export default store