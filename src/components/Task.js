import React from 'react';
import "./Task.css";

const Task = (props) => {
    return (
        <div>
            {props.title}
            <button onClick={() => props.deleteTask(props.id)}>Delete</button>
        </div>
    );
};

export default Task;