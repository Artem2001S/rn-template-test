import {combineReducers} from '@reduxjs/toolkit';

import userReducer from './user';

const createCombinedReducer = () =>
  combineReducers({
    user: userReducer,
  });

const createRootReducer = () => {
  const combinedReducer = createCombinedReducer();

  return (state: any, action: any) => {
    return combinedReducer(state, action);
  };
};

export const rootReducer = createRootReducer();

export type RootState = ReturnType<typeof rootReducer>;
