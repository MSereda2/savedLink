// Packages
import React from 'react';
import {connect} from 'react-redux';

// Style
import style from './listLinks.module.scss';

// Components
import LinkItem from './LinkItem/LinkItem.component';
import AddLink from '../AddLink/AddLink.component'
import SearchInput from '../shared/SearchInput/SearchInput.component';


// Selectors
import {getLinkSelector} from '../../redux/reducer/links/links.selectors';

const ListLinks = ({links}) => {

  const [serachValue, setSearchValue] = React.useState('');

  const filteredlinks = links.filter(link => (
     link.title.toLowerCase().includes(serachValue.toLocaleLowerCase())
  ));
  
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