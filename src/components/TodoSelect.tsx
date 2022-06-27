import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";

import store from "../store/store";

const TodoSelect: FC = observer(() => {
  function isFilterTodo(value: string): void {
    store.isFilterTodo(value);
  }

  return (
    <select className="todo__options" onChange={(e) => isFilterTodo(e.target.value)}>
      <option value="all">все</option>
      <option value="completed">выполненные</option>
      <option value="uncompleted">не выполненные</option>
    </select>
  );
});

export default TodoSelect;
