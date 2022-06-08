import React, { useState } from "react";
import Input from "../components/Input";
import ToDoItemList from "../components/ToDoItemList";
import "../index.css";

export default function App() {
  const [todoItem, setTodoItem] = useState([]);

  return (
    <div className="main">
      <span className="head">To Do List</span>
      <Input todoItem={todoItem} setTodoItem={setTodoItem} />
      <ToDoItemList
        title={"할 일"}
        todoItem={todoItem}
        setTodoItem={setTodoItem}
        checkedList={false}
      />
      {/* <ToDoItemList
        title={"한 일"}
        todoItem={todoItem}
        setTodoItem={setTodoItem}
        checkedList={true}
      /> */}
    </div>
  );
}
