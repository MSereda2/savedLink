import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducers
import app_reducer from './reducer/app/app.reducer';
import links_reducer from './reducer/links/links.rudecer';
import {reducer as formReducer} from 'redux-form';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['links']
}

const rootReducer = combineReducers({
  app: app_reducer,
  links: links_reducer,
  form: formReducer
  
});

export default persistReducer(persistConfig ,rootReducer);
