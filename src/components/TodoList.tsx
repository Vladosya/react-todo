import { observer } from "mobx-react-lite";
import React, { FC } from "react";

import store from "../store/store";
import TodoAdd from "./TodoAdd";
import TodoSelect from "./TodoSelect";

const TodoList: FC = observer(() => {
  function removeTodo(id: number): void {
    store.removeTodo(id);
  }

  function completedTodo(id: number): void {
    store.completeTodo(id);
  }

  return (
    <div className="todo">
      <TodoAdd />
      <TodoSelect />
      <div className="todo__content">
        {store.todosFilter.map((todo) => {
          return (
            <div className="todo__style" key={todo.id}>
              <ul className="todo__items">
                {todo.description}
                <p>{todo.completed === true ? "Выполнено" : "Не выполнено"}</p>
              </ul>
              <div className="todo__btns">
                {todo.completed === false ? (
                  <button className="todo__btn_compl" onClick={(_) => completedTodo(todo.id)}>
                    Выполнить
                  </button>
                ) : (
                  ""
                )}
                <button className="todo__btn_delete" onClick={(_) => removeTodo(todo.id)}>
                  Удалить
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default TodoList;
