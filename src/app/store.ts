import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import AuthReducer from "../reducers/AuthReducer";
import CalendarReducer from "../reducers/CalendarReducer";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    calendar: CalendarReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
