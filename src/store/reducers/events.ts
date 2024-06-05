import {createSlice} from "@reduxjs/toolkit";
import type {IEvent} from "../../types/i-event";

type IState = {
  list: IEvent[];
  error: null | string;
  waiting: boolean;
}

const initialState: IState = {
  list: [
    {id: '1', date: '2024-05-01T01:14:53+03:00', title: 'Курс английского'},
    {id: '2', date: '2024-05-02T09:14:53+03:00', title: 'Курс английского'},
    {id: '3', date: '2024-05-03T12:14:53+03:00', title: 'Курс английского'},
    {id: '4', date: '2024-05-04T14:14:53+03:00', title: 'Курс английского'},
    {id: '5', date: '2024-05-05T18:14:53+03:00', title: 'Курс английского'},
  ],
  error: null,
  waiting: false
}

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {}
})

export default eventsSlice.reducer;