import React from 'react';
import { NavLink } from 'react-router-dom';

const UserAccount = () => {
  return (
    <aside>
      <div className="avatar-layer">
        <div className="img-layer">
          <a href="" className="change-image">
            <i className="zmdi zmdi-edit"></i>
          </a>
          <img src="images/pic/avatar.jpg" />
        </div>
        <div className="detail">
          <span>محمد امین معتمدیان </span>
          <span> عضویت : 01/01/1395 </span>
        </div>
      </div>

      <section>
        <header>
          <h3> میز کار </h3>
        </header>
        <div className="inner">
          <ul>
            <li>
              <NavLink to="/profile" activeStyle={{ color: 'blueviolet' }}>
                {' '}
                مشاهده حساب کابری{' '}
              </NavLink>
            </li>
            <li>
              <NavLink to="/editprofile" activeStyle={{ color: 'blueviolet' }}>
                {' '}
                ویرایش حساب کابری{' '}
              </NavLink>
            </li>
            <li>
              <a href=""> تغییر رمز عبور </a>
            </li>
            <li>
              <a href=""> تنظیمات حساب کاربری </a>
            </li>
            <li>
              <a href=""> خروج از حساب کاربری </a>
            </li>
          </ul>
        </div>
      </section>
    </aside>
  );
};

export default UserAccount;
