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
      //console.log('User set in state:', state.user);
    },
    setProfile: (state, action: PayloadAction<Profile>) => {
      state.profile = action.payload;
      //console.log('Profile set in state:', state.profile);
    },
    setFieldProfile: (state, action: PayloadAction<{ field: string; value: string }>) => {
      const { field, value } = action.payload;
      if (state.user && state.profile && field in state.profile) {
        (state.profile as any)[field] = value;
      }
    },
    updateAvatarReducer: (state, action: PayloadAction<string>) => {
      if (state.profile) {
        state.profile.avatar = action.payload;
        //console.log('Avatar updated in state:', state.profile.avatar);
      }
    },
    clearState: (state) => {
      state.user = null;
      state.profile = null;
    },
  },
});

export const { setUser, setProfile, setFieldProfile, updateAvatarReducer, clearState } =
  userSlice.actions;
export default userSlice.reducer;
