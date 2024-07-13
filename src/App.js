import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import Column from './components/Column';
import SearchBar from './components/SearchBar';
import AddTaskButton from './components/AddTaskButton';
import { moveTask } from './redux/actions';

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const searchQuery = useSelector((state) => state.searchQuery);
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    dispatch(moveTask(draggableId, source.index, source.droppableId, destination.index, destination.droppableId));
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = {
    'todo': filteredTasks.filter((task) => task.status === 'todo'),
    'inprogress': filteredTasks.filter((task) => task.status === 'inprogress'),
    'peerreview': filteredTasks.filter((task) => task.status === 'peerreview'),
    'done': filteredTasks.filter((task) => task.status === 'done'),
  };

  return (
    <div className="kanban-board">
      <h1>KANBAN - BOARD</h1>
      <SearchBar />
      <div className="columns-container">
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.keys(columns).map((column) => (
            <Column key={column} title={column} tasks={columns[column]} />
          ))}
        </DragDropContext>
      </div>
      <AddTaskButton />
    </div>
  );
};

export default App;
