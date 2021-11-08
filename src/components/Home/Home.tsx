import { ICalendarEvent, IEventGroup } from "../../types/types";
import Event from "../Event/Event";
import Filter from "../Filter/Filter";
import {
  Container,
  EventContainer,
  GroupContainer,
  GroupsContainer,
  GroupTitle,
} from "./Home.styled";

interface IHome {
  groups: IEventGroup[];
}

const Home: React.FC<IHome> = ({ groups }) => {
  const renderGroups = () => {
    return groups.map((item, index) => {
      return (
        <GroupContainer key={index}>
          <GroupTitle>{item.title}</GroupTitle>
          <EventContainer>{renderEvents(item.events)}</EventContainer>
        </GroupContainer>
      );
    });
  };

  const renderEvents = (events: ICalendarEvent[]) => {
    return events.map(e => <Event event={e} />);
  };

  return (
    <Container>
      <Filter />
      <GroupsContainer>{renderGroups()}</GroupsContainer>
    </Container>
  );
};

export default Home;
