import React from 'react';
import "./AddTaskForm.css";

const AddTaskForm = (props) => {
    return (
        <div>
            <h3>Add New Task</h3>
            <form>
                <input className="add-task-input" type="text" value={props.title} onChange={(e)=>props.changeTask(e.target.value)} name="task" placeholder="Add new task..." />
                <button type="button" onClick={()=>props.addTask()}>Add</button>
            </form>
        </div>
    );
};

export default AddTaskForm;