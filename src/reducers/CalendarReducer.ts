import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { ICalendarEvent, RangeType } from "../types/types";

export interface ICalendarState {
  events: ICalendarEvent[];
  range: RangeType;
}

const initialState: ICalendarState = {
  events: [],
  range: 7,
};

export const slice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    setRange: (state, action: PayloadAction<RangeType>) => {
      state.range = action.payload;
    },
    setEvents: (state, action: PayloadAction<ICalendarEvent[]>) => {
      state.events = action.payload;
    },
  },
});

export const { setEvents, setRange } = slice.actions;

export const selectEvents = (state: RootState) => state.calendar.events;
export const selectRange = (state: RootState) => state.calendar.range;

export default slice.reducer;
