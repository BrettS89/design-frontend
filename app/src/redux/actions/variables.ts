import { ActionTypes, Action } from './types';
import { Variable } from '../../types';

export const setVariables: Action<Variable[]> = (payload) => ({
  type: ActionTypes.SET_VARIABLES,
  payload,
});
