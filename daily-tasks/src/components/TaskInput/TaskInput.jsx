import './TaskInput.css'

const TaskInput = () => {
    return (
        <form action="submit">
            <input type="text" /><br/>
            <button onClick="submit">Add Task</button>
        </form>
    );
}

export default TaskInput;
