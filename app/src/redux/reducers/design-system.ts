import { Reducer } from 'redux';
import { ActionTypes } from '../actions';
import { DesignSystem } from '../../types';

interface Action {
  type: ActionTypes;
  payload: any;
}

export interface DesignSystemState {
  designSystems: DesignSystem[];
  selectedDesignSystem?: DesignSystem;
}

const INITIAL_STATE: DesignSystemState = {
  designSystems: [],
  selectedDesignSystem: undefined,
};

export const designSystemReducer: Reducer<DesignSystemState, Action> = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case ActionTypes.SET_DESIGN_SYSTEMS:
      return {
        ...state,
        designSystems: payload,
      };

    case ActionTypes.SET_SELECTED_DESIGN_SYSTEM:
      return {
        ...state,
        selectedDesignSystem: payload,
      };
      
    default:
      return state;
  }
};
