import { AUTH_SIGN_OUT, AUTH_SIGN_IN } from './constants';
import {
  ReducerStateAuthentication,
  ReducerActionAuthentication,
} from '../../../types/store/reducers/Authentication';

const initialState: ReducerStateAuthentication = {
  user: { id: '', name: '' },
  token: '',
  isAuthenticate: false,
};

function authenticationReducer(
  state = initialState,
  action: ReducerActionAuthentication
): ReducerStateAuthentication {
  switch (action.type) {
    case AUTH_SIGN_IN:
      return { user: action.user, token: action.token, isAuthenticate: true };
    case AUTH_SIGN_OUT:
      return initialState;
    default:
      return state;
  }
}

export default authenticationReducer;
