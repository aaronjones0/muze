import { User } from '@muze/model/User';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UserSliceState {
  user: User | undefined;
}

export const initialUserSliceState: UserSliceState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserSliceState,
  reducers: {
    signedIn: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    signedOut: (state) => {
      state.user = undefined;
    },
  },
});

export const { signedIn, signedOut } = userSlice.actions;
