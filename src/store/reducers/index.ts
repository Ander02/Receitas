import authenticationReducer from './authentication/reducer';
import navigationConfigReducer from './navigationConfig/reducer';

const reducers = {
  authentication: authenticationReducer,
  navigationConfig: navigationConfigReducer,
};

export default reducers;
