import React from 'react';
import style from './btn.module.scss'

const Btn = (props) => (
    <button className={style.btn}>
      {props.text}
    </button>
)

export default Btn;