import {APP_TYPES} from './app.types';

const INITIAL_STATE = {
  initialize: false
}

const app_reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case INITIAL_STATE.initialize:
      return {
        ...state,
        initialize: true
      }
    
    default: return state;
  }
}

export default app_reducer;