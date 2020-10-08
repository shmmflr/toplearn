import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const TopNav = () => {
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
              <div className="signin ">
              {/* <NavLink to="/login" activeStyle={{ color: 'lime' }}>
                  {' '}
                  ورود{' '}
                </NavLink>{' '}
                /
                <NavLink to="/register" activeStyle={{ color: 'lime' }}>
                  {' '}
                  عضویت{' '}
                </NavLink>{' '} */}
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
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default TopNav;
