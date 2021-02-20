import React,{useReducer} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskForm from './TaskForm.js';
import Tasks from './Tasks.js'
import OperationLogs from './OperationLogs.js'
import AppContext from '../contexts/AppContext.js';
import reducer from '../reducers/index.js'; 
import operationLogs from '../reducers/operationLogs';

const App = () => {
  const initialState = {
    tasks:[],
    operationLogs:[]
  }
  const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <AppContext.Provider value={{state,dispatch}}>  
    <div className='p__top'>
    <div className='p__top__taskList'>
      <h1>TaskList</h1>
      <div className='task mb-5'>
        <div className='task__management'>
          <TaskForm />
        </div>
        <div className='task__list'>
          <Tasks />
        </div>
      </div>
      <div className='task__operation'>
        <OperationLogs />
      </div>
    </div>
    </div>
    </AppContext.Provider>
  );
}

export default App;
