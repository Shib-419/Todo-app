// import React, { useState } from 'react'
// import "./Todo.css";
// import TodoForm from './TodoForm';
// import TodoList from './TodoList';
// import TodoDate from './TodoDate';

// const Todo = () => {


//     const [task, setTask] = useState([]);  // TO store the values that keep on changing in the inputs..


//     const handleFormSubmit = (inputValue) => {

//         //checks if the input is empty then dont update
//         if (!inputValue) return;

//         // If the value is already present there in the array..
//         if (task.includes(inputValue)) {
//             // setInputValue("");
//             return;
//         }
//         // i want to keep the previous value and the new value
//         setTask((prevTask) => [...prevTask, inputValue]);

//         //After all the tasks, i need to re-initialize the input value to empty string ..jahadwara extra previou value guda add na haba task array re....
//     }


//     //! Delete Button

//     const handleDelete = (value) => {
//         console.log(task);
//         console.log(value);
//         // const updatedTask = task.filter((currTask) => currTask === value) // This will return the value which is equals to the currTask..but if we want to delete that we need to do it vice-versa

//         const updatedTask = task.filter((currTask) => currTask !== value)
//         setTask(updatedTask);

//     }

//     //! Clear Button
//     const handleClearAll = () => {
//         setTask([]);
//     }

//     //! Check Todo
//     const handleChecked = ()=>{

//     }

//     return (
//         <section className='todo-container'>
//             <header>
//                 <h1>Todo List</h1>
//                 <TodoDate/>
//             </header>

//             <TodoForm onAddTodo={handleFormSubmit} />

//             <section className='myUnOrdList'>
//                 <ul>
//                     {
//                         task.map((currTask, index) => {
//                             return <TodoList key={index} data={currTask} onHandleDelete={handleDelete} 
//                             onHandleChecked={handleChecked}
//                             />
//                         })
//                     }
//                 </ul>
//             </section>
//             <section className='clear-sec'>
//                 <button onClick={handleClearAll} className='clr-btn'>Clear All</button>
//             </section>
//         </section>
//     )
// }

// export default Todo

import React, { useState } from 'react';
import './Todo.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';

const Todo = () => {
  const [task, setTask] = useState([]); // Array of objects: { text: '', completed: false }

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;

    // Prevent duplicate entries
    if (task.some((t) => t.text === inputValue)) return;

    setTask((prevTask) => [
      ...prevTask,
      { text: inputValue, completed: false }
    ]);
  };

  const handleDelete = (value) => {
    const updatedTask = task.filter((currTask) => currTask.text !== value.text);
    setTask(updatedTask);
  };

  const handleClearAll = () => {
    setTask([]);
  };

  const handleChecked = (index) => {
    const updatedTasks = task.map((currTask, i) =>
      i === index ? { ...currTask, completed: !currTask.completed } : currTask
    );
    setTask(updatedTasks);
  };

  return (
    <section className='todo-container'>
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className='myUnOrdList'>
        <ul>
          {task.map((currTask, index) => (
            <TodoList
              key={index}
              data={currTask}
              onHandleDelete={() => handleDelete(currTask)}
              onHandleChecked={() => handleChecked(index)}
            />
          ))}
        </ul>
      </section>

      <section className='clear-sec'>
        <button onClick={handleClearAll} className='clr-btn'>Clear All</button>
      </section>
    </section>
  );
};

export default Todo;
