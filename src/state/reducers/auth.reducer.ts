import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

type UserState = {
  user: any | null;
  token: string | null;
  
};

const slice = createSlice({
  name: 'userauth',
  initialState: {
    user: null,
    token: null,
   
  } as unknown as UserState,
  reducers: {
    setCredentials: (state, {payload: {user, token}}) => {
      state.user = user;
      state.token = token;
    },
   
    signOut: () => {},
  },
});

export const {setCredentials, signOut} =
  slice.actions;

export default slice.reducer;

export const selectUser = (state: RootState) => state.userAuth.user;
export const selectToken = (state: RootState) => state.userAuth.token;