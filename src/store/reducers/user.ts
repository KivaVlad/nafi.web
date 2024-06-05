import {createSlice} from "@reduxjs/toolkit";
import type {IUser} from "../../types/i-user";

type IState = {
  data: IUser;
  error: null | string;
  waiting: boolean;
}

const initialState: IState = {
  data: {
    id: '1', 
    username: 'Владимир',
    lastname: 'Смирнов',
    surname: 'Иванович',
    job: 'Преподавалель английского языка',
    email: 'vladimirsmirnov@mail.ru',
    tel: '+79295555252',
    org: 'SkyEng',
    entity: 'Физическое лицо'
  },
  error: null,
  waiting: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export default userSlice.reducer;
