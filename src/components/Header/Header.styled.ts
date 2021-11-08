import styled from "styled-components";
import { Button1 } from "../../styled/common";

export const Container = styled.div`
  height: 8vh;
  background-color: ${props => props.theme.grey2};
  box-shadow: ${props => props.theme.shadow};
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content max-content;
  gap: 1em;
  padding: 0 2em;
  height: 100%;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.white};
  margin: 0;
  padding: 0;
`;

export const LogoutButton = styled(Button1)`
  color: ${props => props.theme.orange};
  background-color: transparent;
  margin: 0;
  padding: 0;
`;
