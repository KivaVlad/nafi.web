import {createSlice} from "@reduxjs/toolkit";
import type {IUser} from "../../types/i-user";

type IState = {
  user: IUser;
  isLogged: boolean;
  error: null | string;
  waiting: boolean;
}

const initialState: IState = {
  user: {
    id: '1', 
    name: 'Владимир Смирнов Иванович', 
    username: 'Владимир',
    job: 'Преподавалель Английского языка',
    email: 'vladimirsmirnov@mail.ru',
    tel: '+7 929 555-52-52',
    org: 'SkyEng',
    entity: 'Физическое лицо'
  },
  isLogged: false,
  error: null,
  waiting: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export default userSlice.reducer;
