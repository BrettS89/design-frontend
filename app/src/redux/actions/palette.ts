import { ActionTypes, Action } from './types';
import { Palette } from '../../types';

export const setPalettes: Action<Palette[]> = (payload) => ({
  type: ActionTypes.SET_PALETTES,
  payload,
});

export const setSelectedPalette: Action<Palette> = (payload) => ({
  type: ActionTypes.SET_SELECTED_PALETTES,
  payload,
});
