export const ADD_TASK = 'ADD_TASK';
export const MOVE_TASK = 'MOVE_TASK';
export const SEARCH_TASK = 'SEARCH_TASK';

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task
});

export const moveTask = (taskId, sourceIndex, sourceColumn, destIndex, destColumn) => ({
    type: MOVE_TASK,
    payload: { taskId, sourceIndex, sourceColumn, destIndex, destColumn }
});

export const searchTask = (query) => ({
    type: SEARCH_TASK,
    payload: query
});
