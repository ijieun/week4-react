import React, { useState } from "react";
import InputBox from "./Components/InputBox";
import ToDoItemList from "./Components/ToDoItemList";
import "./App.css";
import styles from "./RandomClass.scss";

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="homepage__container">

      <InputBox todoList={todoList} setTodoList={setTodoList}></InputBox>
      
      <div className="todo__container">

      <div id="todo__logo">
      <ToDoItemList
        title={"To Do List"}
        todoList={todoList}
        setTodoList={setTodoList}
      ></ToDoItemList>
      </div>

      <ToDoItemList></ToDoItemList>
      </div>
    </div>
  );
};

export default Home;
