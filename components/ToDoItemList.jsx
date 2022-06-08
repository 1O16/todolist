import React from "react";
import ToDoItem from "./ToDoItem";

const ToDoItemList = ({ title, todoItem, setTodoItem, checkedList }) => (
  <div className="value">
    <p className="title">{title}</p>
    <ul className="list">
      {todoItem &&
        todoItem.map((todo) => {
          if (todo.deleted) return null;
          return (
            <ToDoItem
              key={todoItem.id}
              todo={todo}
              todoItem={todoItem}
              setTodoItem={setTodoItem}
            />
          );
        })}
    </ul>
  </div>
);

export default ToDoItemList;
