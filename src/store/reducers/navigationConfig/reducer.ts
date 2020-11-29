import { NAV_TAB_HEIGHT } from './constants';
import {
  ReducerStateNavigationConfig,
  ReducerActionNavigationConfig,
} from '../../../types/store/reducers/NavigationConfig';

const initialState: ReducerStateNavigationConfig = {
  tabNavigation: { height: 0 },
};

function navigationConfigReducer(
  state = initialState,
  action: ReducerActionNavigationConfig
): ReducerStateNavigationConfig {
  switch (action.type) {
    case NAV_TAB_HEIGHT:
      return { tabNavigation: { height: action.tabNavigationHeight } };
    default:
      return state;
  }
}

export default navigationConfigReducer;
