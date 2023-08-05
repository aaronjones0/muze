import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const userSelector = (state: RootState) => state.user.user;

export default store;
