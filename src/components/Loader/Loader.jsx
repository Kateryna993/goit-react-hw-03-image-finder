import React from 'react';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Spinner = () => {
  //other logic

  return (
    <Loader
      type="Circles"
      color="#7db5e9" //#3f51b5
      height={60}
      width={60}
      timeout={2000}
    />
  );
};

export default Spinner;
