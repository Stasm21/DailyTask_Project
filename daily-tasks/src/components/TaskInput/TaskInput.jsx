import './TaskInput.css'
import React, { useState } from 'react';



const TaskInput = () => {

    const [enteredTask, setEnteredTask] = useState('');

    const addTaskHandler = (event) => {
        setEnteredTask(event.target.value);
        console.log('hello')
    }

    const submitHandler = (event) => {
        event.preventDefault();

        
    }


    return (
        <form onSubmit={submitHandler}>
            <input onChange={addTaskHandler} type="text" value={enteredTask} /><br/>
            <button type='submit'>Add Task</button>
        </form>
    );
}

export default TaskInput;
