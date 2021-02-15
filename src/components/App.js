import React,{useState,useReducer} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from '../reducers/index.js';

const App = () => {
  const [state,dispatch] = useReducer(reducer,[]);
  const [title,setTitle] = useState('');
  const [content,setContent] = useState('');
  const addTask = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_TASK',
      title,
      content
    });
    setTitle('');
    setContent('');
  }
  return (
    <>
    <div className='container'>
      <div className='task__management'>
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
            <button className='btn btn-primary' onClick={addTask}>タスクを追加する</button>
            <button className='btn btn-danger'>タスクを削除する</button>
        </form>
      </div>
      <div className='task__list'>
        <h4>タスク一覧</h4>
        <table className='table table-hover'>
          <thead>
            <tr >
              <th>ID</th>
              <th>タイトル</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            {
              state.map((task,index) => {
                const id = task.id;
                const taskDeleteButton = (e) => {
                  e.preventDefault();
                  dispatch({
                    type:'DELETE_TASK',
                    id:id,
                  });
                }
                return(<tr key={index}>
                  <td>{id}</td>
                  <td>{task.title}</td>
                  <td>{task.content}</td>
                  <td><button type='button' className='btn btn-danger' onClick={taskDeleteButton}>削除</button></td>
                </tr>
              )})
            }
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default App;
