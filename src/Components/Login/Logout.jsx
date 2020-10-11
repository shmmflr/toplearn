import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { clearUser } from '../../Redux/Actions/User';

const Logout = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem('token');
    dispatch(clearUser());
    history.push('/');
  }, []);
  return null;
};

export default withRouter(Logout);
