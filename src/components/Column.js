import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';

const Column = ({ title, tasks }) => {
    const columnClass = title.toLowerCase().replace(" ", "-");

    return (
        <div className={`column ${columnClass}`}>
            <h2>{title}</h2>
            <Droppable droppableId={title}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps} className="task-list">
                        {tasks.map((task, index) => (
                            <TaskCard key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;
