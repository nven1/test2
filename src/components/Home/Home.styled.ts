import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: max-content 1fr;
  overflow: hidden;
`;

export const GroupsContainer = styled.div`
  overflow: auto;
  padding: 1em 0 4em;
`;

export const GroupContainer = styled.div`
  margin-left: 1em;
  width: 70vw;
`;

export const EventContainer = styled.div`
  display: grid;
  gap: 1em;
  margin-left: 1em;
  width: 70vw;
`;

export const GroupTitle = styled.h2`
  color: ${props => props.theme.grey1};
  margin-left: 1em;
`;
