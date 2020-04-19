import React from 'react'
import style from './linkItem.module.scss';

const LinkItem = (props) => {

  return(
    <div className={style.linkItem}>
      <div className={style.linkItem__content}>
        <h3 className={style.linkItem__heading}>{props.title}</h3>
        <a className={style.linkItem__link}>{props.link}</a>
      </div>
      {/* <div className={style.linkItem__img}>
        <img src="" alt=""/>
      </div> */}
    </div>
  )
}

export default LinkItem;