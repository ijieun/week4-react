import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
// import styles from "./ComRandomClass.scss";
import Puppy from "./images/puppy.jpg";



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
      // deleted: false,
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
      <div className="todoapp__namebox">
      <img src={Puppy} width='500px'/>
        <input
        id="name_input"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="What is your name?"
        ></input>
        <button className="todoapp__name-submit-btn">입력</button>
        <h3>Hello {value}</h3>
      </div>

      <div className="todoapp__todobox">
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
