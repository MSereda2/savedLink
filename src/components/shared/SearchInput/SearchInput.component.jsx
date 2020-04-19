import React from 'react';
import style from './SearchInput.module.scss';

// Icons
import {GoSearch} from 'react-icons/go'

const SearchInput = (props) => (
  <>
    <label className={style.search__label}><GoSearch className={style.search__icon}/></label>
    <input autocomplete="off" {...props} className={style.search__input} />
  </>
)

export default SearchInput;