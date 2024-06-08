import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {IAuth} from "../../types/i-auth";

type IState = {
  access_token: string;
  refresh_token: string;
  errors: string;
  waiting: boolean;
  exists: boolean;
}

const initialState: IState = {
  access_token: localStorage.getItem('access_token') || '',
  refresh_token: localStorage.getItem('refresh_token') || '',
  errors: '',
  waiting: false,
  exists: false
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    // Фейковая авторизация для проверки
    signIn(state, actions: PayloadAction<IAuth>) {
      if (actions.payload.login === 'admin' && actions.payload.password === 'admin') {
        state.access_token = 'token';
        state.exists = true;
        state.waiting = false;
        state.errors = '';
        localStorage.setItem('access_token', state.access_token);
      } else {
        state.exists = false;
        state.waiting = false;
        state.errors = 'Введите корректные данные';
      }
    },

    // Выход
    signOut(state) {
      state.access_token = '';
      state.exists = false;
      localStorage.removeItem('access_token');
    },

    // Фейковая проверка токена
    remind(state) {
      const token = localStorage.getItem('access_token');
      if (token) {
        state.exists = true;       
      } else {
        state.exists = false;
      }
    }
  },
})

export const {signIn, signOut, remind} = sessionSlice.actions;
export default sessionSlice.reducer;
