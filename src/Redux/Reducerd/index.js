import { combineReducers } from 'redux';
import { coursesReducer } from './CourseS';
import { userReducer } from './User';

export const reducers = combineReducers({
  courseS: coursesReducer,
  course: coursesReducer,
  user: userReducer,
});
