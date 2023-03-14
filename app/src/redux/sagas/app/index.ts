import {
  call, put, takeLatest, select
} from 'redux-saga/effects';
import _cloneDeep from 'lodash/cloneDeep';
import api from '../../../api';
import { ActionTypes, setAppInitialized, setUserData, setDesignSystems, setPalettes, setVariables } from '../../actions';
import { StoreState } from '../../index';
import { User } from '../../../types';
import { initialFetch } from '../utilities';

export default [
  appLoadWatcher,
];

function * appLoadWatcher() {
  yield takeLatest(ActionTypes.ON_APP_LOAD, appLoadHandler);
}

interface AppLoad {
  type: ActionTypes.ON_APP_LOAD;
  payload: {
    navigate(str: string): void;
    path?: string;
  }
}

function * appLoadHandler({ payload }: AppLoad): any {
  try {
    const token = localStorage.getItem('token');
    
    if (!token) throw new Error('no token');

    const fn = () => api.service('security/session').find();
    const userData: User = yield call(fn);

    const [designSystems, palettes, variables] = yield initialFetch(userData);

    yield put(setUserData(userData));
    yield put(setDesignSystems(designSystems.data));
    yield put(setPalettes(palettes.data));
    yield put(setVariables(variables.data));

    payload.navigate('/');

  } catch(e) {
    payload.navigate('/login')
  }

  yield put(setAppInitialized(true));
}
