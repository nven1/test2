export type RangeType = 0 | 7 | 30;

export interface ICalendarEvent {
  eventId: string;
  summary: string | undefined;
  start: string;
  end: string | undefined;
}

export interface IEventGroup {
  title: string;
  type: "weeks" | "days";
  events: ICalendarEvent[];
}
