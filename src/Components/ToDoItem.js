import React from "react";
import PropTypes from "prop-types";
import styles from "./ComRandomClass.scss";

const ToDoItem = ({ todoItem, todoList, setTodoList }) => {
  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map((item) => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
      deleted: item.id === todoItem.id ? !item.deleted : item.deleted,
    }));

    setTodoList(nextTodoList);
  };
  return (
    <li className="todoapp__item">
      <input
        type="checkbox"
        className="todoapp__item-checkbox"
        checked={todoItem.checked}
        onChange={onChangeCheckbox}
      ></input>

      {/* <span className={"todoapp__item-ctx"}>{todoItem.text}</span> */}
      <span className={`todoapp__item-ctx ${ todoItem.checked ? 'todoapp__item-ctx-checked' : '' }`} > {todoItem.text}
      </span>

      {/*<button type="button" className="todoapp__item-edit-btn">
        ✏
  </button>*/}
      <button type="button" className="todoapp__item-delete-btn">
        ❌
      </button>
    </li>
  );
};
ToDoItem.propTypes = {
  todoItem: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string.isRequired,
  }),
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  setTodoList: PropTypes.func.isRequired,
};
export default ToDoItem;
