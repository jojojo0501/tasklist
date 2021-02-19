import React,{useContext} from 'react';
import { DELETE_TASK } from '../actions';
import AppContext from '../contexts/AppContext';
import {ADD_OPERATION_LOG} from '../actions';
import {timeCurrentIso8601} from '../utils';

const Task = ({task}) => {
  const {dispatch} = useContext(AppContext);
  const id = task.id;
  const taskDeleteButton = (e) => {
    e.preventDefault();
    const result = window.confirm(`タスク（id:${id}）を削除しても良いですか？`);
    if (result){
      dispatch({
        type:DELETE_TASK,
        id:id,
      });
      dispatch({
        type:ADD_OPERATION_LOG,
        description:`イベント(id=${id})を削除しました`,
        operatedAt:timeCurrentIso8601()
      })
    }
  }
  return(<tr>
    <td>{id}</td>
    <td>{task.title}</td>
    <td>{task.content}</td>
    <td><button type='button' className='btn btn-danger' onClick={taskDeleteButton}>削除</button></td>
  </tr>
  )}
export default Task;
