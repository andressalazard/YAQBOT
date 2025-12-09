import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthAdminState, PayloadLoginAdmin } from '../../models/dataModel';

const tokenFromStorage = localStorage.getItem('token');

const initialState: AuthAdminState = {
  token: tokenFromStorage,
  userid: null,
  userType: null,
  isAuthenticated: !!tokenFromStorage,
  loading: false,
};

const authAdminSlice = createSlice({
  name: 'authAdmin',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<PayloadLoginAdmin>) => {
      state.token = action.payload.token;
      state.userid = action.payload.userid;
      state.userType = action.payload.userType;
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload.token);
    },
    signupSuccess: (state, action: PayloadAction<PayloadLoginAdmin>) => {
      state.token = action.payload.token;
      state.userid = action.payload.userid;
      state.userType = action.payload.userType;
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload.token);
    },

    logout: (state) => {
      state.token = null;
      state.userid = null;
      state.userType = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, signupSuccess, logout } = authAdminSlice.actions;
export default authAdminSlice.reducer;
