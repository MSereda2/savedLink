import React from 'react';
import style from './select.module.scss'

const Select = ({input, meta, ...props}) => {



  return(
    <>
      <select {...input} {...meta} {...props} className={`${style.select_css} ${style.error}`}>
        <option disabled>Выберите Категорию</option>
        <option>Разработка</option>
        <option>Жизнь</option>
        <option>Фильмы</option>
        <option>Игры</option>
      </select>
    </>
  )
 
}

export default Select;