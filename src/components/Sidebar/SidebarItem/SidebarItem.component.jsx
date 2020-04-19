import React from 'react';
import style from './sidebarItem.module.scss';


const SidebarItem = (props) => {
  // const [active,setActive] = React.useState(false);

  // const handleClick = (e) => {
  //   // setActive(!active);
  //   if(e.target.classList.contains(style.active)) {
  //     e.target.classList.remove(style.active)
  //   } else {
  //     e.target.classList.add(style.active)
  //   }

  // }

  return(
    <li className={style.navbar__item}>
      <a
        onClick={(e) => {
          props.filter(props.category);
        }}
        className={`${style.navbar__link} ${props.activeItem === props.index ? style.active : ''} `} href="#">
          {props.children}
          <span>{props.sidebarText}</span>
      </a>
    </li>
  )
 
}

export default SidebarItem;