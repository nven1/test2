import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.orange};
  display: grid;
  width: 70vw;
  grid-template-columns: 60% 30% 10%;
  border-radius: 8px;
`;

export const EventTitle = styled.h3`
  color: ${props => props.theme.white};
  margin-left: 1em;
`;

export const EventTime = styled.p`
  color: ${props => props.theme.white};
  margin-right: 1em;
  align-self: center;
  text-align: right;
`;

export const EventDeleteButton = styled.button`
  background-color: ${props => props.theme.orange};
  border-radius: 0 8px 8px 0;
  border-color: transparent;
  color: ${props => props.theme.white};
  font-weight: bold;
  align-self: center;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;
