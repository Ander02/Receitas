export interface TabNavigation {
  height?: number;
}

export interface ReducerStateNavigationConfig {
  tabNavigation: TabNavigation;
}

export interface ReducerActionNavigationConfig {
  type: string;
  tabNavigationHeight?: number;
}
