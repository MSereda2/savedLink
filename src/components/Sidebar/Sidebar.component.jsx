import React from 'react';
import style from './sidebar.module.scss';
import {connect} from 'react-redux';

import {FaHome, FaDev, FaHeart, FaGamepad} from 'react-icons/fa';
import {MdLocalMovies} from 'react-icons/md';

// Actions
import {FilterByAC} from '../../redux/reducer/links/links.action';

// Components
import SidebarItem from './SidebarItem/SidebarItem.component';

class Sidebar extends React.Component {

  constructor() {
    super()

    this.state = {
      activeItem: -1,
      items: ['Дом', 'Dev', 'Жизнь', 'Фильмы', 'Игры']
    }
  }
  
  handleItemClick = (index) => {
    this.setState({
      activeItem: index
    })
  }

  activeLink = (index) =>  this.state.activeItem === index ? style.active : '';

  sidebarLinks = () => (
    this.state.items.map((item, index) => (
      <li className={style.navbar__item}>
        <a
          onClick={ e => { this.props.FilterByAC(); this.handleItemClick(index); }}
          className={`${style.navbar__link} ${this.activeLink(index)} `}>
          <span>{item}</span>
        </a>
      </li>
    ))
  )

  
  render() {
    return(
      <div className={style.sidebar}>
          <h1 className={style.sidebar__logo}>SavedLink</h1>
          <ul className={style.navbar}>
              {this.sidebarLinks()}
          </ul>
        </div>
    )
  }

}

export default connect(null, { FilterByAC,})( Sidebar);




{/* <>
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
</> */}


// return <SidebarItem activeItem={this.state.activeItem} sidebarText={item} filter={this.props.FilterByAC} index={index}  />