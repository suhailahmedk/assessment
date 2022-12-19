import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
// slices
import { persistReducer } from 'redux-persist';
import staticsReducer from './slices/statics';


// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};



const rootReducer = combineReducers({
  
  statics: staticsReducer,
});

export { rootPersistConfig, rootReducer };
