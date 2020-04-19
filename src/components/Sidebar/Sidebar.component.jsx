import React from 'react';
import style from './sidebar.module.scss';
import {connect} from 'react-redux';

import {FaHome, FaDev, FaHeart, FaGamepad} from 'react-icons/fa';
import {MdLocalMovies} from 'react-icons/md';

// Actions
import {FilterByAC} from '../../redux/reducer/links/links.action';

// Components
import SidebarItem from './SidebarItem/SidebarItem.component';

const Sidebar = (props) => {


  const sidebarList = () => (
    <>
      <SidebarItem sidebarText="Дом" filter={props.FilterByAC} category="home">
        <FaHome />
      </SidebarItem>
      <SidebarItem sidebarText="Dev" filter={props.FilterByAC} category="dev">
        <FaDev />
      </SidebarItem>
      <SidebarItem sidebarText="Жизнь" filter={props.FilterByAC} category="life">
        <FaHeart />
      </SidebarItem>
      <SidebarItem sidebarText="Фильмы" filter={props.FilterByAC} category="movie">
        <MdLocalMovies />
      </SidebarItem>
      <SidebarItem sidebarText="Игры" filter={props.FilterByAC} category="game">
        <FaGamepad />
      </SidebarItem>
    </>
  )
  

  return(
    <div className={style.sidebar}>
        <h1 className={style.sidebar__logo}>SavedLink</h1>
        <ul className={style.navbar}>
          {sidebarList()}
        </ul>
      </div>
  )
}

export default connect(null, { FilterByAC,})( Sidebar);
