import React, { Fragment, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import SimpleValidatorReact from 'simple-react-validator';
import { Redirect, withRouter } from 'react-router';
import { loginUser } from '../../Services/UserServices';
import { errorMessage, successMessage } from '../utils/Message';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../Redux/Actions/User';
import { tokenDecoded } from '../utils/TokenDecoded';
import { isEmpty } from 'lodash';

const Login = ({ history }) => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [, forceUpdate] = useState();
  const validator = useRef(
    new SimpleValidatorReact({
      messages: {
        min: 'تعداد کارکتر ها کم است',
        required: ' لطفا اینجا را هم پر کنید',
        email: ' ایمیل وارد شده صحیح نمی باشد',
      },
      element: (messages) => <div style={{ color: 'red' }}>{messages}</div>,
    })
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      email,
      password,
    };
    try {
      if (validator.current.allValid()) {
        const { status, data } = await loginUser(user);
        if (status === 200) {
          successMessage('خوش آمدید');
          console.log(data);
          localStorage.setItem('token', data.token);
          dispatch(addUser(tokenDecoded(data.token).payload.user));
          history.replace('/');
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      errorMessage('مشکلی پیش آمده است');
    }
  };

  if (!isEmpty(user)) return <Redirect to="/" />;
  return (
    <Fragment>
      <main className="client-page">
        <div className="container-content">
          <header>
            <h2> ورود به سایت </h2>
          </header>
          <Helmet>
            <title>تاپلرن | ورود به سایت</title>
          </Helmet>

          <div className="form-layer">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <span className="input-group-addon" id="email-address">
                  <i className="fa fa-joomla"></i>
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
                {validator.current.message('email', email, 'email|required')}
              </div>

              <div className="input-group">
                <span className="input-group-addon" id="password">
                  <i className="fa fa-comment"></i>
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

              <div className="remember-me">
                <label>
                  <input type="checkbox" name="" /> مرا بخاطر بسپار{' '}
                </label>
              </div>

              <div className="link">
                <a href="">
                  {' '}
                  <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده
                  ام !
                </a>
                <a href="">
                  {' '}
                  <i className="zmdi zmdi-account"></i> عضویت در سایت{' '}
                </a>
              </div>

              <button className="btn btn-success"> ورود به سایت </button>
            </form>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default withRouter(Login);
