import React from 'react';
import style from './searchLinks.module.scss';
import {reduxForm, Field} from 'redux-form';




const SearchLinks = (props) => (
  <form onSubmit={props.handleSubmit} className={style.search}>
    <SearchInput placeholder="Поиск" name="search" type="search" />
  </form>
)

export default SearchLinks