import React from 'react';
import T from 'prop-types';
import style from './Button.module.css';

const Button = ({ onLoadMore }) => (
  <button onClick={onLoadMore} type="button" className={style.Button}>
    <span className={style.ButtonLabel}>Load more</span>
  </button>
);

Button.propTypes = {
  onLoadMore: T.func.isRequired,
};

export default Button;
