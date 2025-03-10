import { useState } from "react";
import "./App.css";
import { TaskManager } from "./components/TaskManager";
import React from "react";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <TaskManager />
    </>
  );
};

export default App;
