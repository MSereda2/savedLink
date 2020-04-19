// Packages
import React from 'react';
import {connect} from 'react-redux';

// Style
import style from './sidebar.module.scss';

// Actions
import {FilterByAC} from '../../redux/reducer/links/links.action';


class Sidebar extends React.Component {

  constructor() {
    super()

    this.state = {
      activeItem: -1,
      items: ['Главная', 'Разработка', 'Жизнь', 'Фильмы', 'Игры']
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
          onClick={ e => { this.props.FilterByAC(item); this.handleItemClick(index); }}
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
