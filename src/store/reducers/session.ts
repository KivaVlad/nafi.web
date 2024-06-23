import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {API_BASE_URL} from "../../config";
import type {ISession} from "../../types/i-session";

interface IState  {
  access: string;
  refresh: string;
  waiting: boolean;
  exists: boolean;
}

const initialState: IState = {
  access: localStorage.getItem('access_token') || '',
  refresh: localStorage.getItem('refresh_token') || '', 
  waiting: false,
  exists: false
}

/**
 * Функция восстановления сессии refresh токеном
 */
async function remind() {
  const access = localStorage.getItem('access_token');
  if (access) {
    // Делаем запрос для получения данных пользователя
    const response = await fetch(`${API_BASE_URL}/auth/users/me/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access}`
      }
    })
    
    if (!response.ok) {
      // Удаляем плохой токен
      localStorage.removeItem('access_token');
      // Делаем запрос на получение нового токена
      const refresh = localStorage.getItem('refresh_token');
      if (refresh) {
        const res = await fetch(`${API_BASE_URL}/auth/jwt/refresh/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({refresh})
        })
        const data = await res.json() as ISession;
        
        if (res.ok) {
          // Сохраняем новые токены
          localStorage.setItem('access_token', data.access);
          localStorage.setItem('refresh_token', data.refresh);
        }
      }
    }
  
  }
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession(state, action: PayloadAction<ISession>) {
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      localStorage.setItem('access_token', action.payload.access);
      localStorage.setItem('refresh_token', action.payload.refresh);
      state.exists = true;
      state.waiting = false;
    },

    signOut(state) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
      state.access = '',
      state.refresh = '', 
      state.waiting = false,
      state.exists = false
    },
  },
})

export {remind};
export const {signOut, setSession} = sessionSlice.actions;
export default sessionSlice.reducer;
