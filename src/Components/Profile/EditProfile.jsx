import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';

import UserAccount from './UserAccount';

const EditProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
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
        <title>ویرایش پروفایل</title>
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
                    <h1> ویرایش حساب کاربری </h1>
                  </header>
                  <div className="inner form-layer">
                    <form onSubmit={(event) => event.preventDefault()}>
                      <div className="row">
                        <div className="col-md-7 col-sm-8 col-xs-12">
                          <div className="input-group">
                            <span className="input-group-addon" id="username">
                              <i className="zmdi zmdi-account"></i>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="نام و نام خانوادگی"
                              aria-describedby="username"
                            />
                          </div>
                        </div>
                        <div className="col-md-7 col-sm-8 col-xs-12">
                          <div className="input-group">
                            <span
                              className="input-group-addon"
                              id="email-address"
                            >
                              <i className="zmdi zmdi-email"></i>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="ایمیل"
                              aria-describedby="email-address"
                            />
                          </div>
                        </div>
                        <div className="col-md-7 col-sm-8 col-xs-12">
                          <div className="input-group">
                            <span className="input-group-addon" id="password">
                              <i className="zmdi zmdi-lock"></i>
                            </span>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="رمز عبور "
                              aria-describedby="password"
                            />
                          </div>
                        </div>
                        <div className="col-md-7 col-sm-8 col-xs-12">
                          <div className="checkbox-layer">
                            <label>
                              <input type="checkbox" name="" /> گزینه ی چک باکس{' '}
                            </label>
                          </div>
                        </div>
                        <div className="col-md-7 col-sm-8 col-xs-12">
                          <div className="radio-layer">
                            <label>
                              <input type="radio" name="" /> گزینه ی رادیوباتن{' '}
                            </label>
                            <label>
                              <input type="radio" name="" /> گزینه ی رادیوباتن{' '}
                            </label>
                          </div>
                        </div>
                        <div className="col-md-7 col-sm-8 col-xs-12">
                          <div className="link">
                            <a href="">
                              {' '}
                              <i className="zmdi zmdi-lock"></i> رمز عبور خود را
                              فراموش کرده ام !
                            </a>
                            <a href="">
                              {' '}
                              <i className="zmdi zmdi-account"></i> عضویت در
                              سایت{' '}
                            </a>
                          </div>
                        </div>
                        <div className="col-md-7 col-sm-8 col-xs-12">
                          <button className="btn btn-success">
                            {' '}
                            ویرایش اطلاعات{' '}
                          </button>
                        </div>
                      </div>
                    </form>
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

export default EditProfile;
