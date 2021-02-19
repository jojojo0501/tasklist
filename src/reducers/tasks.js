import {
  CREATE_TASK,
  DELETE_ALL_TASKS
} from '../actions';

const tasks = (state = [],action) => {
  switch(action.type){
    case CREATE_TASK:
      const task = {title:action.title, content:action.content};
      const length = state.length;
      let id = '';
      if (length === 0){
        id = 1
      }else {
        id = state[length - 1].id + 1
      };
      return [...state,{id:id,...task }];
    case 'DELETE_TASK':
      return state.filter((task)=>task.id !== action.id);
    case DELETE_ALL_TASKS:
      return [];
    default:
      return state;
  }
};

export default tasks;
