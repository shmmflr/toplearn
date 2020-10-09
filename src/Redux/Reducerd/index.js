import { combineReducers } from 'redux';
import { coursesReducer } from './Curses';
import { userReducer } from './User';
import {courseReducer} from './Course'

export const reducers = combineReducers({
  courses: coursesReducer,
  course: courseReducer,
  user: userReducer,
});
