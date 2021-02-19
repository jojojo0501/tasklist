import React,{useState,useContext} from 'react';
import {CREATE_TASK,DELETE_ALL_TASKS,ADD_OPERATION_LOG,DELETE_ALL_OPERATION_LOGS} from '../actions';
import AppContext from '../contexts/AppContext';
import {timeCurrentIso8601} from '../utils';

const TaskForm = () => {
  const {state,dispatch} = useContext(AppContext);
  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    dispatch({
      type: CREATE_TASK,
      title,
      content
    });
    dispatch({
      type: ADD_OPERATION_LOG,
      description:'タスクを追加しました。',
      operatedAt:timeCurrentIso8601()
    });
    setTitle('');
    setContent('');
  }

  const deleteAllTasks = (e) => {
  e.preventDefault();
  const result = window.confirm('全てのタスクを本当に削除しても良いですか？');
  if (result){
    dispatch({
      type:DELETE_ALL_TASKS
    })
    dispatch({
      type:ADD_OPERATION_LOG,
      description:'全てのタスクを削除しました。',
      operatedAt:timeCurrentIso8601()
    })
  }
  }

 const unCreatable = title === '' || content === '';

 const deleteAllOperationLogs = (e) => {
   e.preventDefault();
   const result = window.confirm('全ての操作ログを本当に削除しても良いですか？');
   if (result) {
     dispatch({
       type:DELETE_ALL_OPERATION_LOGS,
       description:'全ての操作ログを削除しました。',
       operatedAt:timeCurrentIso8601()
      })
    }

 }
  return(
    <>
<h4>TaskList</h4>
<form>
  <div className='form-group'>
    <label htmlFor='formTaskTitle'>タイトル</label>
    <input className='form-control' id='formTaskTitle' value={title} onChange={(e) => setTitle(e.target.value)}/>
  </div>
  <div className='form-group'>
    <label htmlFor='formTaskContent'>内容</label>
    <textarea className='form-control' id='formTaskContent' value={content} onChange={(e)=> setContent(e.target.value)}/>
  </div>
  <button className='btn btn-primary' onClick={addTask} disabled={unCreatable}>タスクを追加する</button>
  <button className='btn btn-danger' onClick={deleteAllTasks} disabled={state.tasks.length === 0}>全てのタスクを削除する</button>
  <button className='btn btn-danger' onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0}>全ての操作ログを削除する</button>
</form>
    </>
  )
}

export default TaskForm;
