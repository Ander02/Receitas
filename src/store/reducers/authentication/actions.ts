import { AUTH_SIGN_IN, AUTH_SIGN_OUT } from './constants';
import { ReducerActionAuthentication } from '../../../types/store/reducers/Authentication';
import { User } from '../../../types/User';

export const authenticationSignInAction = (
  user: User,
  token: string
): ReducerActionAuthentication => ({
  type: AUTH_SIGN_IN,
  user,
  token,
  isAuthenticate: true,
});

export const authenticationSignOutAction = (): { type: string } => ({
  type: AUTH_SIGN_OUT,
});
