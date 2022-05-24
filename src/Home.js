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

      <ToDoItemList 
        title={"To Do List"}
        todoList={todoList}
        setTodoList={setTodoList}
      ></ToDoItemList>

      <ToDoItemList></ToDoItemList>
      </div>
    </div>
  );
};

export default Home;
