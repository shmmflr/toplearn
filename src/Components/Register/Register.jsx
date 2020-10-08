import React, { Fragment, useRef, useState } from 'react';

import { withRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import { registerUser } from '../../Services/UserServices';
import { successMessage, errorMessage } from '../utils/Message';
import SimpleReactValidator from 'simple-react-validator';

const Register = ({ history }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [policy, setPolicy] = useState();
  const [, forceUpdate] = useState();

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: 'عمو جون اینو جا  گذاشتیا',
        min: 'کاراکتر بیشتر عزیزم',
        email: 'داداچ ایمیلت فرمتش درس درمون نی!!',
        accepted: 'پذیرش قوانین اجباریه عمو',
      },
      element: (messages) => <div style={{ color: 'red' }}>{messages}</div>,
    })
  );

  const reset = () => {
    return setFullname(''), setPassword(''), setEmail('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      fullname,
      password,
      email,
    };
    try {
      if (validator.current.allValid()) {
        const { status } = await registerUser(user);
        if (status === 201) {
          successMessage('کاربر با موفقیت ساخته شد.');
          history.push('/login');
        }
        reset();
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      errorMessage('مشکلی پیش آمده است');
    }
  };

  return (
    <Fragment>
      <main className="client-page">
        <div className="container-content">
          <header>
            <h2> عضویت در سایت </h2>
          </header>

          <Helmet>
            <title>تاپلرن | عضویت در سایت</title>
          </Helmet>

          <div className="form-layer">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <span className="input-group-addon" id="username">
                  <i className="zmdi zmdi-account"></i>
                </span>
                <input
                  type="text"
                  name="fullname"
                  className="form-control"
                  placeholder="نام و نام خانوادگی"
                  aria-describedby="username"
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
                    validator.current.showMessageFor('fullname');
                  }}
                />
                {validator.current.message(
                  'fullname',
                  fullname,
                  'required|min:3'
                )}
              </div>

              <div className="input-group">
                <span className="input-group-addon" id="email-address">
                  <i className="fa fa-send"></i>
                </span>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="ایمیل"
                  aria-describedby="email-address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    validator.current.showMessageFor('email');
                  }}
                />
                {validator.current.message('email', email, 'required|email')}
              </div>

              <div className="input-group">
                <span className="input-group-addon" id="password">
                  <i className="zmdi zmdi-lock"></i>
                </span>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="رمز عبور "
                  aria-describedby="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    validator.current.showMessageFor('password');
                  }}
                />
                {validator.current.message(
                  'password',
                  password,
                  'required|min:5'
                )}
              </div>

              <div className="accept-rules">
                <label>
                  <input
                    type="checkbox"
                    name="policy"
                    value={policy}
                    onChange={(e) => {
                      setPolicy(e.target.checked);
                      validator.current.showMessageFor('policy');
                    }}
                  />{' '}
                  قوانین و مقررات سایت را میپذیرم{' '}
                  {validator.current.message('policy', policy, 'accepted')}
                </label>
              </div>

              <div className="link">
                <a href="">
                  {' '}
                  <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت
                  !
                </a>
                <a href="">
                  {' '}
                  <i className="zmdi zmdi-account"></i> ورود به سایت{' '}
                </a>
              </div>

              <button className="btn btn-success"> عضویت در سایت </button>
            </form>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default withRouter(Register);
