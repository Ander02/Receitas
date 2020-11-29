import { User } from '../../User';

export interface ReducerStateAuthentication {
  user: User | null;
  token: string;
  isAuthenticate: boolean;
}

export interface ReducerActionAuthentication {
  type: string;
  user: User | null;
  token: string;
  isAuthenticate: boolean;
}
