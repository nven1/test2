import styled from "styled-components";

export const Button1 = styled.button`
  background-color: ${props => props.theme.orange};
  border-color: transparent;
  border-radius: 100px;
  padding: 0 0.8em;
  color: ${props => props.theme.white};

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Loading = styled.div`
  background-color: ${props => props.theme.orange};
  display: flex;
  place-content: center;
  place-items: center;
  font-weight: bold;
  font-size: 3em;
  height: 100vh;
  color: ${props => props.theme.grey1};
`;
