import React from 'react';
import style from './input.module.scss';

const Input = (props) => (
  <>
    <label htmlFor=""></label>
    <input {...props.input} {...props} className={style.input}/>
  </>
)

export default Input