import {createSlice} from '@reduxjs/toolkit';
import {UserState} from './types';

const initialState: UserState = {
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
