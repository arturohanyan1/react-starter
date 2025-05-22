import { Action, combineReducers } from 'redux';
import { RootState } from '../types/store-types';
import { appReducer } from './app/reducer';
import { dialogsReducer } from './dialogs/reducers';
import { userReducer } from './user/reducer';

const projectReducer = combineReducers({
  user: userReducer,
  app: appReducer,
  dialogs: dialogsReducer,
});

const rootReducer = (state: any | undefined, action: Action): RootState => {
  return projectReducer(state, action);
};

export default rootReducer;
