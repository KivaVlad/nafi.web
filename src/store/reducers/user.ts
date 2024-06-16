import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import {API_BASE_URL} from "../../config";
import type {IUser} from "../../types/i-user";

interface IState {
  data: IUser;
  error: null | string;
  waiting: boolean;
}

const initialState: IState = {
  data: {
    lastname: '',
    name: '',
    middlename: '',
    business_area: '',
    phone: '',
    organization: '',
    entity: '',
    id: '',
    email: '',
  },
  error: null,
  waiting: false
}

const loadUser = createAsyncThunk<IUser, undefined>(
  'user/loadUser',
  async function () {
    const response = await fetch(`${API_BASE_URL}/auth/users/me/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    const data = await response.json();
    return data;
  }
)

const changeUserData = createAsyncThunk<IUser, IUser>(
  'user/changeUserData',
  async function(data) {
    const response = await fetch(`${API_BASE_URL}/auth/users/me/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      },
      body: JSON.stringify(data)
    })
    const json = await response.json();
    return json;
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Получение данных пользователя
      .addCase(loadUser.pending, (state) => {
        state.waiting = true;
      })
      .addCase(loadUser.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.data.id = action.payload.id.toString();
        state.data.name = action.payload.name;
        state.data.lastname = action.payload.lastname;
        state.data.middlename = action.payload.middlename;
        state.data.email = action.payload.email;
        state.data.business_area = action.payload.business_area;
        state.data.entity = action.payload.entity;
        state.data.organization = action.payload.organization;
        state.data.phone = action.payload.phone;
        state.error = null;
        state.waiting = false;
      })
      .addCase(loadUser.rejected, (state) => {
        state.error = 'Ошибка получения данных';
        state.waiting = false;
      })

      // Изменение данных пользователя
      .addCase(changeUserData.pending, (state) => {
        state.waiting = true;
      })
      .addCase(changeUserData.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.data.name = action.payload.name;
        state.data.lastname = action.payload.lastname;
        state.data.middlename = action.payload.middlename;
        state.data.email = action.payload.email;
        state.data.business_area = action.payload.business_area;
        state.data.entity = action.payload.entity;
        state.data.organization = action.payload.organization;
        state.data.phone = action.payload.phone;
        state.error = null;
        state.waiting = false;
      })
      .addCase(changeUserData. rejected, (state) => {
        state.error = 'Ошибка получения данных';
        state.waiting = false;
      })
  },
})

export {loadUser, changeUserData};
export default userSlice.reducer;
