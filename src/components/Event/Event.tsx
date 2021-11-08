import moment from "moment";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import CalendarDataAccess from "../../data_access/CalendarDataAccess";
import { selectRange } from "../../reducers/CalendarReducer";
import { ICalendarEvent } from "../../types/types";
import {
  Container,
  EventDeleteButton,
  EventTime,
  EventTitle,
} from "./Event.styled";

interface IEvent {
  event: ICalendarEvent;
}

const Event: React.FC<IEvent> = ({ event }) => {
  const dispatch = useAppDispatch();
  const range = useSelector(selectRange);

  const getFormattedEventTime = () => {
    const start = moment(event.start).format("hh:mm");
    const end = moment(event.end).format("hh:mm");
    if (range === 30) {
      const date = moment(event.start).format("DD.MM.");
      return `${date}  (${start} - ${end})`;
    }
    return `${start} - ${end}`;
  };

  const deleteEvent = () => {
    CalendarDataAccess.deleteEvent(event.eventId, onSuccessDelete);
  };

  const onSuccessDelete = () => {
    CalendarDataAccess.getEventList(dispatch)(range);
  };

  return (
    <Container>
      <EventTitle>{event.summary}</EventTitle>
      <EventTime>{getFormattedEventTime()}</EventTime>
      <EventDeleteButton onClick={deleteEvent}>Delete</EventDeleteButton>
    </Container>
  );
};

export default Event;
