import React from 'react';
import style from './sidebarItem.module.scss';


const SidebarItem = (props) => {
  const [active,setActive] = React.useState(false);

  return(
    <li className={style.navbar__item}>
      <a 
        onClick={() => {
          props.filter(props.category);
          setActive(!active);
        }}
        className={`${style.navbar__link} ${active ? style.active : ''} `} href="#">
          {/* <i className={style.navbar__icon} /> */}
          {props.children}
          <span>{props.sidebarText}</span>
      </a>
    </li>
  )
 
}

export default SidebarItem;