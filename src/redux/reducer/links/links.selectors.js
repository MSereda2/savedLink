import {createSelector} from 'reselect' 

// helper to selectors
export const getLinks = (state) => {
  return state.links
}


const byCategory = (categoryName) => (link) => link.category === categoryName;


export const getLinkSelector = createSelector(getLinks, ({links, filterBy}) => {
  // const links = linksState.links;
  // const filterBy = linksState.filterBy;


  if(filterBy.home) { return links;}

  else if(filterBy.life) { return links.filter(byCategory('Жизнь'))}

  else if(filterBy.dev) { return links.filter(byCategory('Разработка'))}

  else if(filterBy.movie) { return links.filter(byCategory('Фильмы'))}

  else if(filterBy.game) { return links.filter(byCategory('Игры'))}

  else { return links }
})
