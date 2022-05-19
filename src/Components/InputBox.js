import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const InputBox = ({ todoList, setTodoList }) => {
  //투두리스트 입력
  const [text, setText] = useState("");
  const inputRef = useRef(null);

  const onChangeInput = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const onClickAddButton = () => {
    const nextTodoList = todoList.concat({
      id: todoList.length,
      text,
      checked: false,
    });
    setTodoList(nextTodoList);

    setText("");
    inputRef.current.focus();
  };

  //이름 입력
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="todoapp__inputbox">
      <div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="What is your name?"
        ></input>
        <button>입력</button>
        <h3>Hello {value}</h3>
      </div>

      <input
        type="text"
        name="todoItem"
        value={text}
        ref={inputRef}
        placeholder="할 일을 입력해주세요"
        className="todoapp__inputbox-inp"
        onChange={onChangeInput}
      ></input>

      <button
        type="submit"
        className="todoapp__inputbox-add-btn"
        onClick={onClickAddButton}
      >
        추가
      </button>
    </div>
  );
};

InputBox.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ),
  setTodoList: PropTypes.func.isRequired,
};

export default InputBox;