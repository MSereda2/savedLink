import React from 'react';
import style from './listLinks.module.scss';
import {connect} from 'react-redux';

// Components
import LinkItem from './LinkItem/LinkItem.component';
import AddLink from '../AddLink/AddLink.component'
import SearchInput from '../shared/SearchInput/SearchInput.component';


// Selectors
import {getLinkSelector} from '../../redux/reducer/links/links.selectors';

const ListLinks = (props) => {

  const [serachValue, setSearchValue] = React.useState('');

  const filteredlinks = props.links.filter(link => {
    return  link.title.toLowerCase().includes(serachValue.toLocaleLowerCase())
  });
  
  const currentLinks = filteredlinks.map((link,indx) => <LinkItem key={indx} {...link} />)

  return(
    <div className={style.listLinks}>
      <div className={style.searchContainer}>
          <form className={style.search}>
              <SearchInput onChange={e => setSearchValue(e.target.value)} placeholder="Поиск" name="search" type="search" />
          </form>
          <AddLink />
      </div>
      {currentLinks}

    </div>
  )
}

const mapStateToProps = (state) => ({
  links: getLinkSelector(state)
})

export default connect(mapStateToProps,{})(ListLinks);