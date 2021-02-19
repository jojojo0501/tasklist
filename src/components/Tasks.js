import React,{ useContext } from 'react';
import AppContext from '../contexts/AppContext.js';
import Task from './Task.js'

const Tasks = () => {
  const {state} = useContext(AppContext);
  return(
    <>
    <h4>タスク一覧</h4>
        <table className='table table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            {state.tasks.map((task,index) => (<Task key={index} task={task}/>))}
          </tbody>
        </table>
  </>
)
}
export default Tasks;