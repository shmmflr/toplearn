import { isEmpty } from 'lodash';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

const TopNav = () => {
  const user = useSelector((state) => state.user);
  return (
    <Fragment>
      <nav>
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <ul>
              <li>
                <NavLink to="/" activeStyle={{ color: 'lime' }} exact>
                  {' '}
                  همکاری در فروش{' '}
                </NavLink>
                <a href=""> درباره ما </a>
                <a href=""> تماس با ما </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="clientarea">
              {isEmpty(user) ? (
                <div className="signin ">
                  <NavLink to="/login" activeStyle={{ color: 'lime' }}>
                    {' '}
                    ورود{' '}
                  </NavLink>{' '}
                  /
                  <NavLink to="/register" activeStyle={{ color: 'lime' }}>
                    {' '}
                    عضویت{' '}
                  </NavLink>{' '}
                </div>
              ) : (
                <div className="signin ">
                  <Link to="/profile"> {user.fullname} خوش اومدی </Link> /
                  <Link to="/logout"> خروج </Link>{' '}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default TopNav;
