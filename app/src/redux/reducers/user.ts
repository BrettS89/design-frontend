import { Reducer } from 'redux';
import { ActionTypes } from '../actions';
import { User } from '../../types';

interface Action {
  type: ActionTypes;
  payload: any;
}

export interface UserState {
  data?: User;
}

const INITIAL_STATE: UserState = {
};

export const userReducer: Reducer<UserState, Action> = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case ActionTypes.SET_USER_DATA:
      return {
        ...state,
        details: payload,
      };
      
    default:
      return state;
  }
};
