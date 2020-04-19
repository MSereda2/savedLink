// Action Type
import {LINKS_TYPE} from './links.type';

// Reducer Helper
import {filterByHelper} from './links.helper';

const INITIAL_STATE = {
  links: [
    {
      title: '11 лучших сервисов для хранение закладок',
      link: 'https://www.google.ru/',
      category: 'Жизнь',
      id: 1
    },
  ],
  filterBy: ''
}

const linksReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LINKS_TYPE.ADD_LINK:
      return {
        ...state,
        links: [...state.links, action.payload]
      }
    case LINKS_TYPE.FILTER_BY:
      return {
        ...state,
        filterBy: action.category
      }


    default: return state;
  }
}

export default linksReducer;
