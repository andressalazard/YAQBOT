import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, User, UserState } from '../../models/dataModel';

const initialState: UserState = {
  isloading: false,
  user: null,
  profile: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setProfile: (state, action: PayloadAction<Profile>) => {
      state.profile = action.payload;
    },
    clearState: (state) => {
      state.user = null;
      state.profile = null;
    },
  },
});

export const { setUser, setProfile, clearState } = userSlice.actions;
export default userSlice.reducer;
