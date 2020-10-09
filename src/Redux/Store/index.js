import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getAllCourses} from '../Actions/Courses';
import { reducers } from '../Reducerd';

export const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// subscrib
store.subscribe(() => console.log(store.getState()));

//initialize
store.dispatch(getAllCourses());
