import { AppDispatch } from "../app/store";
import { gapi } from "gapi-script";
import moment from "moment";
import { ICalendarEvent, RangeType } from "../types/types";
import { setEvents } from "../reducers/CalendarReducer";

const getEventList = (dispatch: AppDispatch) => (range: RangeType) => {
  const cal = gapi.client.calendar;
  const start = moment().startOf("day").toISOString();
  const end = moment().add(range, "days").endOf("day").toISOString();

  cal.events
    .list({
      calendarId: "primary",
      timeMin: start,
      timeMax: end,
      orderBy: "startTime",
      singleEvents: true,
    })
    .then(res => {
      const items = res.result.items;
      if (items && items.length) {
        const events: ICalendarEvent[] = items.map(e => {
          return {
            eventId: e.id,
            summary: e.summary,
            start: e.start?.dateTime,
            end: e.end?.dateTime,
          } as ICalendarEvent;
        });
        dispatch(setEvents(events));
      }
    });
};

const deleteEvent = (eventId: string, onSuccess: () => void) => {
  const cal = gapi.client.calendar;
  cal.events.delete({ calendarId: "primary", eventId: eventId }).then(res => {
    onSuccess();
  });
};

const addEvent = (
  summary: string,
  start: string,
  end: string,
  onSuccess: () => void
) => {
  const cal = gapi.client.calendar;
  cal.events
    .insert({
      calendarId: "primary",
      resource: { summary, start: { dateTime: start }, end: { dateTime: end } },
    })
    .then(res => {
      onSuccess();
    });
};

const CalendarDataAccess = {
  getEventList,
  deleteEvent,
  addEvent,
};

export default CalendarDataAccess;
