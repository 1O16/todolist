import React, { useState, useRef } from "react";

const InputBox = ({ todoItem, setTodoItem }) => {
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClickAdd = () => {
    const addTodoItem = todoItem.concat({
      id: todoItem.length,
      text,
      checked: false,
      deleted: false,
    });
    setTodoItem(addTodoItem);

    setText("");
    inputRef.current.focus();
  };

  console.log(todoItem)

  return (
    <div className="inputbox">
      <input
        type="text"
        name="todoInput"
        value={text}
        ref={inputRef}
        placeholder="할 일을 입력해주세요"
        className="inputText"
        onChange={onChange}
      />
      <button type="submit" className="addBtn" onClick={onClickAdd}>
        +
      </button>
    </div>
  );
};

export default InputBox;
