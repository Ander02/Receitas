import AsyncStorage from '@react-native-community/async-storage';
import { StoreLocalState } from '../types/store/Store';

export const loadState = async (): Promise<StoreLocalState> => {
  try {
    const serializedState = await AsyncStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = async (state: StoreLocalState): Promise<void> => {
  try {
    const serializedState = JSON.stringify(state);
    await AsyncStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};
