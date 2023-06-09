/* eslint-disable react/prop-types */
import DeleteIcon from "../assets/deleteicon.png"
import colorTodo from '../assets/colorTodo.png';
import "./todo.css"
import React from 'react';


export const TodoItem = ({ title, deleteTodo, setcolor }) => {
  return (
    <div className="todo-item" id="todo-1">
      <p className="todo-task-title">{title}</p>
      <div className="todoicon">
      <img className="Tick" src={colorTodo} alt="Icon" onClick={setcolor} />
      <img className="todo-icon" src={DeleteIcon} onClick={deleteTodo} />
      </div>
    </div>
  )
}