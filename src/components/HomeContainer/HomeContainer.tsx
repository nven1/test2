import moment from "moment";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";
import CalendarDataAccess from "../../data_access/CalendarDataAccess";
import { selectEvents, selectRange } from "../../reducers/CalendarReducer";
import { ICalendarEvent, IEventGroup } from "../../types/types";
import Home from "../Home/Home";

const HomeContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const events = useSelector(selectEvents);
  const range = useSelector(selectRange);

  const [groups, setGroups] = useState<string[]>([]);

  useEffect(() => {
    setGroups(createGroups());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events]);

  useEffect(() => {
    CalendarDataAccess.getEventList(dispatch)(range);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [range]);

  // creates unique groups
  const createGroups = () => {
    return events
      .map(e => {
        const shouldSortByWeeks = range === 30 ? true : false;
        const date = formatDate(e.start, shouldSortByWeeks);
        return date;
      })
      .filter((value, index, self) => self.indexOf(value) === index);
  };

  // returns a list of group objects to Home component
  const getSortedGroups = () => {
    const isByWeeks = range === 30 ? true : false;
    const sortedGroups = isByWeeks ? sortByWeeks() : sortByDays();

    const objectGroups: IEventGroup[] = sortedGroups.map(e => {
      return {
        type: isByWeeks ? "weeks" : "days",
        title: getGroupTitle(e[0], isByWeeks),
        events: e,
      };
    });

    return objectGroups;
  };

  /*
  Returns a groups array. Each group has an array of its events.
  In this case, one group represents one day
    groups [
      [events]
      [events]
    ]
*/
  const sortByDays = () => {
    return groups.map(group => {
      return events.filter(event => {
        return moment(event.start).isSame(formatDate(group), "day");
      });
    });
  };

  /*
  Returns a groups array. Each group has an array of its events.
  In this case, one group represents one week
    groups [
      [events]
      [events]
    ]
*/
  const sortByWeeks = () => {
    return groups.map(group => {
      return events.filter(event => {
        const eventWeek = formatDate(moment(event.start).toString(), true);
        return moment(eventWeek).isSame(group);
      });
    });
  };

  const getGroupTitle = (event: ICalendarEvent, isByWeeks?: boolean) => {
    if (event) {
      if (!isByWeeks) {
        return moment(event.start).startOf("day").format("DD.MM.YYYY.");
      }
      const start = moment(event.start).startOf("week").format("DD.MM.");
      const end = moment(event.start).endOf("week").format("DD.MM.YYYY.");
      return `${start} - ${end}`;
    }
    return "Loading";
  };

  const formatDate = (date: string, sortByWeeks?: boolean) => {
    const sortType = sortByWeeks ? "week" : "day";
    return moment(date).startOf(sortType).toISOString();
  };

  return (
    <>
      <Home groups={getSortedGroups()} />;
    </>
  );
};

export default HomeContainer;
