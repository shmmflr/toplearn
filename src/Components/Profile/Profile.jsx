import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import {  useSelector } from 'react-redux';

import UserAccount from './UserAccount';

const Profile = () => {
  const user = useSelector((state) => state.user);
  return (
    <Fragment>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">تاپ لرن</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {' '}
              پنل کاربری{' '}
            </li>
          </ul>
        </nav>
      </div>
      <Helmet>
        <title> پروفایل</title>
      </Helmet>
      <main>
        <div className="container">
          <div className="user-account">
            <div className="row">
              <div className="col-md-3 col-sm-4 col-xs-12">
                <UserAccount />
              </div>
              <div className="col-md-9 col-sm-8 col-xs-12">
                <section className="user-account-content">
                  <header>
                    <h1> داشبورد </h1>
                  </header>
                  <div className="inner">
                    <div className="account-information">
                      <h3> اطلاعات کاربری </h3>
                      <ul>
                        <li>
                          {' '}
                          <i className="zmdi zmdi-account"></i> نام و نام
                          خانوادگی : {user.fullname}{' '}
                        </li>
                        <li>
                          {' '}
                          <i className="zmdi zmdi-assignment-account"></i> نام
                          کاربری : Amin(RPG){' '}
                        </li>
                        <li>
                          {' '}
                          <i className="zmdi zmdi-email"></i> ایمیل :{"  "}
                          {user.email}{' '}
                        </li>
                        <li>
                          {' '}
                          <i className="zmdi zmdi-calendar-check"></i> تاریخ
                          عضویت : 01/01/1395{' '}
                        </li>
                        <li>
                          {' '}
                          <i className="zmdi zmdi-smartphone-android"></i> شماره
                          تماس : 0912000000{' '}
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Profile;
