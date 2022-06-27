import { observer } from "mobx-react-lite";
import React, { FC, useState } from "react";

import store from "../store/store";

const TodoAdd: FC = observer(() => {
  const [value, setValue] = useState<string>("");

  const addTodo = (value: string): void => {
    if (value.length > 0) {
      setValue("");
      store.addTodo({
        id: store.todos.length + 1,
        description: value,
        completed: false,
      });
    }
  };

  return (
    <div className="todo__input">
      <input
        className="todo__text"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span onClick={(_) => addTodo(value)} className="todo__add"></span>
    </div>
  );
});

export default TodoAdd;
