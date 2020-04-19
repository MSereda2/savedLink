import {createSelector} from 'reselect' 

// helper to selectors
export const getLinks = (state) => {
  return state.links
}


const byCategory = (categoryName) => (link) => link.category === categoryName;


export const getLinkSelector = createSelector(getLinks, ({links, filterBy}) => {

  switch(filterBy) {
    case 'Главная':
       return links;
    case 'Жизнь':
       return links.filter(byCategory('Жизнь'));
    case 'Разработка':
       return links.filter(byCategory('Разработка'));
    case 'Фильмы':
       return links.filter(byCategory('Фильмы'));
    case 'Игры':
       return links.filter(byCategory('Игры'));
    default: return links
  }

  // if(filterBy === 'Главная') { return links;}

  // else if(filterBy === 'Жизнь') { return links.filter(byCategory('Жизнь'))}

  // else if(filterBy.dev) { return links.filter(byCategory('Разработка'))}

  // else if(filterBy.movie) { return links.filter(byCategory('Фильмы'))}

  // else if(filterBy.game) { return links.filter(byCategory('Игры'))}

  // else { return links }
})
