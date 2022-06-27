import React, { FC } from "react";

import "./App.scss";

import TodoList from "./components/TodoList";

const App: FC = () => {
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default App;
