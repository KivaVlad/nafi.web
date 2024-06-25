import {PayloadAction, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_BASE_URL} from "../../config";
import type {IEvent} from "../../types/i-event";
import type {ISlide} from "../../types/i-slide";

type IState = {
  list: IEvent[];
  slides: ISlide[];
  error: null | string;
  waiting: boolean;
}

const initialState: IState = {
  list: [],
  slides: [],
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
export async function createEvent(formData: any) {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${localStorage.getItem('access_token')}`);
  const response = await fetch(`${API_BASE_URL}/api/events/`, {
    method: 'POST',
    headers,
    body: formData,
  })
  const json = await response.json() as IEvent;
  return json;
}

// Редактирование события
export async function editEvent(id: number, formData: any) {
  const headers = new Headers();
  headers.append("Authorization", `Bearer ${localStorage.getItem('access_token')}`);
  const response = await fetch(`${API_BASE_URL}/api/events/${id}/`, {
    method: 'PATCH',
    headers,
    body: formData,
  })
  const json = await response.json() as IEvent;
  return json;
}

// Удаление события
export const removeEvent = createAsyncThunk<undefined, number>(
  'events/removeEvent',
  async function(id) {
    const response = await fetch(`${API_BASE_URL}/api/events/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    const data = await response.json();
    return data;
  }
)

// Получение списка слайдов по id
export const loadSlides = createAsyncThunk<ISlide[], string>(
  'events/loadSlides',
  async function(id) {
    const response = await fetch(`${API_BASE_URL}/api/events/${id}/slides/`, {
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
  name: 'events',
  initialState,
  reducers: {
    // Устанавливаем статус ожидания
    setWaiting(state) {
      state.waiting = true;
    },

    // При успешно созданном событии 
    onSuccessCreate(state, action: PayloadAction<IEvent>) {
      state.list.push(action.payload);
      state.waiting = false;
      state.error = null;
    },

    // В случае ошибки
    onError(state) {
      state.waiting = false;
      state.error = 'Ошибка при создании';
    },

    // Удаление события
    onRemoveEvent(state, action: PayloadAction<number>) {
      state.list = state.list.filter((item) => item.id !== action.payload);
    }
  },

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

      // Получение слайдов к событию 
      .addCase(loadSlides.pending, (state) => {
        state.waiting = true;
        state.slides = [];
      })
      .addCase(loadSlides.fulfilled, (state, action: PayloadAction<ISlide[]>) => {
        state.slides = action.payload;
        state.error = null;
        state.waiting = false;
      })
      .addCase(loadSlides.rejected, (state) => {
        state.error = 'Ошибка получения данных';
        state.waiting = false;
      })
  },
})

export const {onRemoveEvent, onSuccessCreate, setWaiting, onError} = eventsSlice.actions;
export default eventsSlice.reducer;