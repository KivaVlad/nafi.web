import {configureStore} from "@reduxjs/toolkit";
import sessionSlice from "./reducers/session";
import userSlice from "./reducers/user";
import eventsSlice from "./reducers/events";
import detailsSlice from "./reducers/details";

const store = configureStore({
  reducer: {
    session: sessionSlice,
    user: userSlice,
    events: eventsSlice,
    details: detailsSlice,
  }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;