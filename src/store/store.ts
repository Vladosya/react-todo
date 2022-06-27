import { makeAutoObservable } from "mobx"; // makeObservable

import { ITodo } from "../types/store/store";

class Store {
  todos = [] as ITodo[];
  todosFilter = [] as ITodo[];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(payload: ITodo): void {
    this.todos.push(payload);
    this.todosFilter = this.todos;
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo: ITodo) => todo.id !== id);
    this.todosFilter = this.todosFilter.filter((todo: ITodo) => todo.id !== id);
  }

  completeTodo(id: number): void {
    this.todos = this.todos.map((todo: ITodo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    this.todosFilter = this.todos;
  }

  isFilterTodo(needSort: string): void {
    this.todosFilter = this.todos;
    if (needSort === "all") {
      this.todosFilter = this.todos;
    } else if (needSort === "completed") {
      this.todosFilter = this.todos.filter((todo: ITodo) => todo.completed === true);
    } else {
      this.todosFilter = this.todos.filter((todo: ITodo) => todo.completed === false);
    }
  }
}

export default new Store();
