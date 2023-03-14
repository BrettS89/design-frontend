import { combineReducers } from 'redux';
import { appReducer, AppState } from './app';
import { designSystemReducer, DesignSystemState } from './design-system';
import { paletteReducer, PaletteState } from './palette';
import { variableReducer, VariableState } from './variable';
import { userReducer, UserState } from './user';

export interface StoreState {
  app: AppState;
  user: UserState;
  designSystem: DesignSystemState;
  palette: PaletteState;
  variable: VariableState;
}

export const reducers = combineReducers({
  app: appReducer,
  designSystem: designSystemReducer,
  palette: paletteReducer,
  variable: variableReducer,
  user: userReducer,
});
