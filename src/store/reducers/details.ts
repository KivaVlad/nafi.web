import {PayloadAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_BASE_URL} from "../../config";
import type {IEvent} from "../../types/i-event";

type IState = {
  result: IEvent;
  error: null | string;
  waiting: boolean;
}

const initialState: IState = {
  result: {
    id:  0,
    title: '',
    start_date: '',
    pdf: '',
    user: 0,
  },
  error: null,
  waiting: false
}

// Получение списка событий
export const loadDetails = createAsyncThunk<IEvent, string>(
  'details/loadDetails',
  async function(id) {
    const response = await fetch(`${API_BASE_URL}/api/events/${id}/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    const data = await response.json();
    return data;
  }
)

const eventsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Получение списка событий 
      .addCase(loadDetails.pending, (state) => {
        state.result = {
          id: 0,
          title: '',
          start_date: '',
          pdf: '',
          user: 0,
        },
        state.waiting = true;
      })
      .addCase(loadDetails.fulfilled, (state, action: PayloadAction<IEvent>) => {
        state.result = action.payload;
        state.waiting = false;
        state.error = null;
      })
      .addCase(loadDetails.rejected, (state) => {
        state.error = 'Ошибка получения данных';
      })
  },
})

export default eventsSlice.reducer;