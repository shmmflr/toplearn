import React from 'react';
import { Route, Switch } from 'react-router';
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
import { useSelector } from 'react-redux';

const Toplearn = () => {
  const courses = useSelector((state) => state.courses);
  const indexCourse = Paginate(courses, 1, 8);

  return (
    <MainLayout>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/allcourses" component={AllCourses} />
        <Route path="/profile" component={Profile} />
        <Route path="/editprofile" component={EditProfile} />
        <Route path="/course/:id" component={SingleCourse} />
        <Route path="/" exact render={() => <Course courses={indexCourse} />} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </MainLayout>
  );
};

export default Toplearn;
