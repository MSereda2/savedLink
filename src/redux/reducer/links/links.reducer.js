// Action Type
import {LINKS_TYPE} from './links.type';


const INITIAL_STATE = {
  links: [],
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
