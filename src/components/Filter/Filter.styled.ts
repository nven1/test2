import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5em 2em;
  display: flex;
  gap: 1em;
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.shadow};
`;

export const FilterText = styled.p`
  color: ${props => props.theme.grey2};
  font-weight: bold;
  margin: 0;
`;
