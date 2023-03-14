import { ActionTypes, Action } from './types';
import { DesignSystem } from '../../types';

export const setDesignSystems: Action<DesignSystem[]> = (payload) => ({
  type: ActionTypes.SET_DESIGN_SYSTEMS,
  payload,
});

export const setSelectedDesignSystem: Action<DesignSystem> = (payload) => ({
  type: ActionTypes.SET_SELECTED_DESIGN_SYSTEM,
  payload,
});
