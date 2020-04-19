import {LINKS_TYPE} from './links.type';

export const AddLinkAC = (payload) => ({
  type: LINKS_TYPE.ADD_LINK,
  payload
})

export const FilterByAC = (payload) => ({
  type: LINKS_TYPE.FILTER_BY,
  category: payload
})

