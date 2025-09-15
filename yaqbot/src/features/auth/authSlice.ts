import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, AuthState, ValidPayload, UserProfile } from './types';

const tokenFromStorage = localStorage.getItem('token');

const initialState: AuthState = {
  token: tokenFromStorage,
  isAuthenticated: !!tokenFromStorage,
  loading: false,
  user: null,
  profile: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<ValidPayload>) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload.token);
    },
    signupSuccess: (state, action: PayloadAction<ValidPayload>) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload.token);
    },

    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('token');
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    setUserProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
    },
  },
});

export const { loginSuccess, signupSuccess, logout, setUser, setUserProfile } = authSlice.actions;
export default authSlice.reducer;
