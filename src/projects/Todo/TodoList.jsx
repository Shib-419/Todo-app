import React from 'react';
import { MdCheck, MdDeleteForever } from 'react-icons/md';

const TodoList = ({ data, onHandleDelete, onHandleChecked }) => {
  return (
    <li className='todo-actions'>
      <span className={`task-text ${data.completed ? 'completed' : ''}`}>
        {data.text}
      </span>
      <button onClick={onHandleChecked} className='check-btn'>
        <MdCheck />
      </button>
      <button className='delete' onClick={onHandleDelete}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default TodoList;
