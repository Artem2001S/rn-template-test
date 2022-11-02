import {createSelector} from 'reselect';
import {RootState} from '../index';

export const rootSelector = createSelector(
  (state: RootState) => state,
  state => state.user,
);

export const tokenSelector = createSelector(rootSelector, state => state.token);
