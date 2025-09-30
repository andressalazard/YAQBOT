import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState, ValidPayload } from '../../models/dataModel';

const tokenFromStorage = localStorage.getItem('token');

const initialState: AuthState = {
  token: tokenFromStorage,
  userid: null,
  isAuthenticated: !!tokenFromStorage,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<ValidPayload>) => {
      state.token = action.payload.token;
      state.userid = action.payload.userid;
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload.token);
    },
    signupSuccess: (state, action: PayloadAction<ValidPayload>) => {
      state.token = action.payload.token;
      state.userid = action.payload.userid;
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload.token);
    },

    logout: (state) => {
      state.token = null;
      state.userid = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, signupSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
