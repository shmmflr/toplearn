import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Toplearn from './Toplearn';

const App = () => {
  useEffect(() => {
    require('../Components/utils/jquery');
  });
  return (
    <div>
      <BrowserRouter>
        <Toplearn />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
