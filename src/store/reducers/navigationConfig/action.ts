/* eslint-disable import/prefer-default-export */
import { NAV_TAB_HEIGHT } from './constants';
import { ReducerActionNavigationConfig } from '../../../types/store/reducers/NavigationConfig';

export const navigationTabHeightAction = (
  height: number
): ReducerActionNavigationConfig => ({
  type: NAV_TAB_HEIGHT,
  tabNavigationHeight: height,
});
