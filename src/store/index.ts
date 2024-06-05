import {configureStore} from "@reduxjs/toolkit";
import sessionSlice from "./reducers/session";
import userSlice from "./reducers/user";
import eventsSlice from "./reducers/events";

const store = configureStore({
  reducer: {
    session: sessionSlice,
    user: userSlice,
    events: eventsSlice,
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;