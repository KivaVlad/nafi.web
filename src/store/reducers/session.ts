import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {ISession} from "../../types/i-session";

interface IState  {
  access: string;
  refresh: string;
  errors: boolean;
  waiting: boolean;
  exists: boolean;
}

const initialState: IState = {
  access: localStorage.getItem('access_token') || '',
  refresh: localStorage.getItem('refresh_token') || '', 
  errors: false,
  waiting: false,
  exists: false
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    // Успешный вход
    completedSignIn(state, action: PayloadAction<ISession>) {
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      localStorage.setItem('access_token', action.payload.access);
      localStorage.setItem('refresh_token', action.payload.refresh);
      state.exists = true;
      state.waiting = false;
      state.errors = false;
    },

    // Выход
    signOut(state) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      state.access = '',
      state.refresh = '', 
      state.errors = false,
      state.waiting = false,
      state.exists = false
    },
  },
})

export const {signOut, completedSignIn} = sessionSlice.actions;
export default sessionSlice.reducer;
