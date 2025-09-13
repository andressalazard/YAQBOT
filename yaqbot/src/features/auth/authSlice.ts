import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, AuthState, ValidPayload } from './types';

const tokenFromStorage = localStorage.getItem('token');

const initialState: AuthState = {
  token: tokenFromStorage,
  isAuthenticated: !!tokenFromStorage,
  loading: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<ValidPayload>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload.token);
    },
    signupSuccess: (state, action: PayloadAction<ValidPayload>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
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
  },
});

export const { loginSuccess, signupSuccess, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
