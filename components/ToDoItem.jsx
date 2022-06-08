import React, { useEffect, useRef, useState } from "react";

const ToDoItem = ({ todo, todoItem, setTodoItem }) => {
  const [retouch, setRetouch] = useState(false);
  const [newText, setNewText] = useState(todoItem.text);
  const retouchInputRef = useRef(null);

  useEffect(() => {
    if (retouch) {
      retouchInputRef.current.focus();
    }
  }, [retouch]);

  const onClickRetouch = () => {
    setRetouch(true);
  };

  const onChangeRetouch = (e) => {
    setNewText(e.target.value);
  };

  const onClickSubmit = () => {
    const newTodoText = todoItem.map((item) => ({
      ...item,
      text: item.id === todo.id ? newText : item.text,
    }));

    setTodoItem(newTodoText);
    setRetouch(false);
  };

  const onClickDelete = () => {
    const deleteItem = todoItem.map((item) => ({
      ...item,
      deleted: item.id === todo.id ? true : item.deleted,
    }));

    setTodoItem(deleteItem);
  };
  return (
    <li className="item">
      <input type="checkbox" className="checkbox" />
      {retouch ? (
        <input
          type="text"
          className="retouchInput"
          value={newText}
          ref={retouchInputRef}
          onChange={onChangeRetouch}
        />
      ) : (
        <span className={`todo ${todo.checked ? "todoChecked" : ""}`}>
          {todo.text}
        </span>
      )}

      {retouch ? (
        <button type="button" className="changeBtn" onClick={onClickSubmit}>
          ✔
        </button>
      ) : (
        <button type="button" className="changeBtn" onClick={onClickRetouch}>
          ✏
        </button>
      )}
      <button type="button" className="deleteBtn" onClick={onClickDelete}>
        🗑sdadsddghdgdh
      </button>
    </li>
  );
};

export default ToDoItem;
