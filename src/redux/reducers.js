import { ADD_TASK, MOVE_TASK, SEARCH_TASK } from './actions';

const initialState = {
    tasks: [],
    searchQuery: ''
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            };
        case MOVE_TASK:
            const { taskId, sourceIndex, sourceColumn, destIndex, destColumn } = action.payload;
            const taskToMove = state.tasks.find(task => task.id === taskId);
            const updatedTasks = state.tasks.filter(task => task.id !== taskId);
            taskToMove.status = destColumn;
            updatedTasks.splice(destIndex, 0, taskToMove);
            return {
                ...state,
                tasks: updatedTasks
            };
        case SEARCH_TASK:
            return {
                ...state,
                searchQuery: action.payload
            };
        default:
            return state;
    }
};

export default taskReducer;
