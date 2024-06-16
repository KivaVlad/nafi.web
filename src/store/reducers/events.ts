import {PayloadAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_BASE_URL} from "../../config";
import type {IEvent} from "../../types/i-event";

type IState = {
  list: IEvent[];
  error: null | string;
  waiting: boolean;
}

const initialState: IState = {
  list: [],
  error: null,
  waiting: false
}

// Получение списка событий
export const load = createAsyncThunk<IEvent[], undefined>(
  'events/loadEvents',
  async function() {
    const response = await fetch(`${API_BASE_URL}/api/events/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    const data = await response.json();
    return data;
  }
)

// Создание нового события
export const create = createAsyncThunk<IEvent, IEvent>(
  'events/createEvent',
  async function(data) {
    const response = await fetch(`${API_BASE_URL}/api/events/`, {
      method: 'POST',
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

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Получение списка событий 
      .addCase(load.pending, (state) => {
        state.waiting = true;
      })
      .addCase(load.fulfilled, (state, action: PayloadAction<IEvent[]>) => {
        state.list = action.payload;
        state.waiting = false;
        state.error = null;
      })
      .addCase(load.rejected, (state) => {
        state.error = 'Ошибка получения данных';
      })

      // Создание нового события
      .addCase(create.pending, (state) => {
        state.waiting = true;
      })
      .addCase(create.fulfilled, (state, action: PayloadAction<IEvent>) => {
        state.list.push(action.payload);
        state.waiting = false;
        state.error = null;
      })
      .addCase(create.rejected, (state) => {
        state.waiting = false;
        state.error = 'Ошибка при создании';
      })
  },
})

export default eventsSlice.reducer;