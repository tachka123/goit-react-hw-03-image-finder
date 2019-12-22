import Loader from 'react-loader-spinner';
import React from 'react';
import style from './Loader.module.css';

const SetLoader = () => (
  <div className={style.LoaderPos}>
    <Loader
      type='Puff'
      color='#00BFFF'
      height={100}
      width={100}
      timeout={3000}
    />
  </div>
);

export default SetLoader;
