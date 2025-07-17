import React, { useState } from 'react'

const TodoForm = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState(""); // Now we have fetched the input date here...now we need to store it in a dynamic variable that keeps on updating the value..


    const handleInputChange = (value) => {
        setInputValue(value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();    /// Prevent the default behavior of a form..

        onAddTodo(inputValue);

        setInputValue("");
    }
    return (
        <section className='form'>
            <form onSubmit={handleFormSubmit}>
                <div className='inp-div'>
                    <input type="text" placeholder='Enter Tasks....' className='todo-input' autoComplete='off' value={inputValue}
                        onChange={(e) => { handleInputChange(e.target.value) }}
                    />
                </div>
                <div className='form-div'>
                    <button type='submit' className='todo-btn'>Add Task</button>
                </div>
            </form>
        </section>
    )
}

export default TodoForm