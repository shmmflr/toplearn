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

const Toplearn = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/allcourses" exact component={AllCourses} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/editprofile" exact component={EditProfile} />
        <Route path="/singlecourse" exact component={SingleCourse} />
        <Route path="/" exact component={Course} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </MainLayout>
  );
};

export default Toplearn;
