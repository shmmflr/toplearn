import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Course from '../Components/Course/Course';
import Register from '../Components/Register/Register';
import Login from '../Components/Login/Login';
import MainLayout from '../Components/Layoyt/MainLayout';
import AllCourses from '../Components/Course/AllCourses';
import Profile from '../Components/Profile/Profile';
import EditProfile from '../Components/Profile/EditProfile';
import SingleCourse from '../Components/Course/SingleCourse';
import NotFound from '../Components/Common/NotFound';
import { Paginate } from '../Components/utils/Paginate';
import { useDispatch, useSelector } from 'react-redux';
import { tokenDecoded } from '../Components/utils/TokenDecoded';
import { addUser, clearUser } from '../Redux/Actions/User';
import { isEmpty } from 'lodash';
import Logout from '../Components/Login/Logout';

const Toplearn = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses);
  const indexCourse = Paginate(courses, 1, 8);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const decodToken = tokenDecoded(token);
      const dateNow = Date.now() / 1000;

      if (decodToken.payload.exp < dateNow) {
        dispatch(clearUser());
        localStorage.removeItem('token');
      } else {
        dispatch(addUser(decodToken.payload.user));
      }
    }
  }, []);

  return (
    <MainLayout>
      <Switch>
        //اگر کاربری بود ؟ برو صفحه اصلی : اگر نبود برو صفحه ورود
        <Route
          path="/login"
          render={() => (!isEmpty(user) ? <Redirect to="/" /> : <Login />)}
        />
        <Route
          path="/register"
          render={() => (!isEmpty(user) ? <Redirect to="/" /> : <Register />)}
        />
        <Route
          path="/profile"
          render={() =>
            isEmpty(user) ? <Redirect to="/login" /> : <Profile />
          }
        />
        <Route
          path="/editprofile"
          render={() =>
            isEmpty(user) ? <Redirect to="/login" /> : <EditProfile />
          }
        />
        <Route path="/logout" component={Logout} />
        <Route path="/allcourses" component={AllCourses} />
        <Route path="/course/:id" component={SingleCourse} />
        <Route path="/" exact render={() => <Course courses={indexCourse} />} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </MainLayout>
  );
};

export default Toplearn;
