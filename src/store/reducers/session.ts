import {createSlice} from "@reduxjs/toolkit";

type IState = {
  access_token: string | null;
  refresh_token: string | null;
  errors: null | string;
  waiting: boolean;
  exists: boolean;
}

const initialState: IState = {
  access_token: localStorage.getItem('access_token') || null,
  refresh_token: localStorage.getItem('refresh_token') || null,
  errors: null,
  waiting: false,
  exists: false
}

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {}
})

export default sessionSlice.reducer;
