import { Reducer } from 'redux';
import { ActionTypes } from '../actions';
import { Palette } from '../../types';

interface Action {
  type: ActionTypes;
  payload: any;
}

export interface PaletteState {
  palettes: Palette[];
  setSelectedPalette?: Palette;
}

const INITIAL_STATE: PaletteState = {
  palettes: [],
  setSelectedPalette: undefined,
};

export const paletteReducer: Reducer<PaletteState, Action> = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case ActionTypes.SET_PALETTES:
      return {
        ...state,
        palettes: payload,
      };

    case ActionTypes.SET_SELECTED_PALETTES:
      return {
        ...state,
        setSelectedPalette: payload,
      };
      
    default:
      return state;
  }
};
