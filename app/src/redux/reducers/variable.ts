import { Reducer } from 'redux';
import { ActionTypes } from '../actions';
import { Variable } from '../../types';

interface Action {
  type: ActionTypes;
  payload: any;
}

export interface VariableState {
  variables: Variable[];
}

const INITIAL_STATE: VariableState = {
  variables: [],
};

export const variableReducer: Reducer<VariableState, Action> = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case ActionTypes.SET_VARIABLES:
      return {
        ...state,
        variables: payload,
      };
      
    default:
      return state;
  }
};
