import React, {useState} from "react";
import InputBox from "./Components/InputBox";
import ToDoItemList from './Components/ToDoItemList';
import moment from "moment";
import 'moment/locale/ko';
// import {useInterval} from react-use';
import './App.css';

const Home= () => {
  

    const [todoList, setTodoList] = useState([]);



    // const [realTime, setRealTime] = useState(Date.now());

    // useInterval(()=>{
    //     setRealTime(Date.now());
    // }, 1000);


    return(
        <div className="homepage__container">

         
            
            <InputBox todoList={todoList} setTodoList={setTodoList}></InputBox>

            <ToDoItemList
            title={'할 일'}
            todoList={todoList}
            setTodoList={setTodoList}
            ></ToDoItemList>

            <ToDoItemList></ToDoItemList>

        </div>
    )
}

export default Home;