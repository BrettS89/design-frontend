import { ActionTypes, Action } from './types';
import { User } from '../../types';

export const setUserData: Action<User> = (payload) => ({
  type: ActionTypes.SET_USER_DATA,
  payload,
});
