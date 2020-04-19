import React from 'react';
import style from './select.module.scss'

const Select = (props) => (
  <select {...props.input} {...props} className={style.select_css}>
    <option disabled>Выберите Категорию</option>
    <option>Разработка</option>
    <option>Жизнь</option>
    <option>Фильмы</option>
    <option>Игры</option>
  </select>
)

export default Select;