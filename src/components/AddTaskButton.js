import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTaskButton = () => {
    const dispatch = useDispatch();
    const [showForm, setShowForm] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTask = () => {
        if (title && description) {
            const newTask = {
                id: Date.now().toString(),
                title,
                description,
                status: 'todo'
            };
            dispatch(addTask(newTask));
            setTitle('');
            setDescription('');
            setShowForm(false);
        } else {
            alert('Please enter both a title and a description');
        }
    };

    return (
        <div className="add-task-container">
            {showForm && (
                <div className="add-task-form">
                    <input
                        type="text"
                        placeholder="Task Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Task Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button onClick={handleAddTask}>Submit</button>
                </div>
            )}
            <button className="add-task-button" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'Cancel' : 'Add Task'}
            </button>
        </div>
    );
};

export default AddTaskButton;
