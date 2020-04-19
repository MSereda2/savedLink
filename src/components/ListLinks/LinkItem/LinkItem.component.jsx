// Packages
import React from 'react';

// Style
import style from './linkItem.module.scss';


const LinkItem = ({title, link}) => {

  return(
    <div className={style.linkItem}>
      <div className={style.linkItem__content}>
        <h3 className={style.linkItem__heading}>{title}</h3>
        <a href={link} target='_blank' className={style.linkItem__link}>{link}</a>
      </div>
    </div>
  )
}

export default LinkItem;