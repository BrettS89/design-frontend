import {
  call, put, takeLatest, select
} from 'redux-saga/effects';
import _cloneDeep from 'lodash/cloneDeep';
import api from '../../../api';
import { ActionTypes, setUserData, setDesignSystems, setPalettes, setVariables } from '../../actions';
import { StoreState } from '../../index';
import { User } from '../../../types';
import { initialFetch } from '../utilities';

export default [
  loginWatcher,
];

function * loginWatcher() {
  yield takeLatest(ActionTypes.ON_LOGIN, loginHandler);
}

interface LoginProps {
  type: ActionTypes.ON_LOGIN,
  payload: {
    email: string;
    password: string;
    navigate(str: string): void
  }
}

function * loginHandler({ payload }: LoginProps): any {
  try {
    const loginFn = () => api
      .service('security/session')
      .create({
        email: payload.email,
        password: payload.password,
      });

    const { user, token }: { user: User, token: string } = yield call(loginFn);

    localStorage.setItem('jwt', token);

    const [designSystems, palettes, variables] = yield initialFetch(user);

    yield put(setUserData(user));
    yield put(setDesignSystems(designSystems.data));
    yield put(setPalettes(palettes.data));
    yield put(setVariables(variables.data));

    yield put(setUserData(user));

  } catch(e) {
    // errorAlert(e);
  }
}
