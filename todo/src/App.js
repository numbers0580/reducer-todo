import React, {useState, useReducer} from 'react';
import {initState, redeux} from './reducers/reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  // To those reviewing this code: You may notice the somewhat odd names for variables, objects, and functions.
  // I do this to be sure what I learned from Lambda School are not specific function names that I have to use.
  const [currentState, dispatched] = useReducer(redeux, initState);
  const [data, modifyList] = useState('');

  const updateInput = evt => {
    modifyList(evt.target.value);
  };

  const updateList = evt => {
    evt.preventDefault();

    const newListing = {
      item: data,
      completed: false,
      id: Date.now()
    };

    dispatched({type: 'ADDITEM', payload: newListing});
    modifyList('');
  };

  const checkComplete = taskID => {
    dispatched({type: 'TOGGLE_COMPLETE', payload: taskID});
  };

  return (
    <div className="App">
      <h1>The Gnomes List</h1>
      <TodoList state={currentState} toggleItem={checkComplete} />
      <TodoForm listItem={data} updateInput={updateInput} onSubmit={updateList} />
    </div>
  );
}

export default App;
