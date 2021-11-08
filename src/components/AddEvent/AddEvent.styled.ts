import styled from "styled-components";
import { Button1 } from "../../styled/common";

export const Container = styled.div`
  display: grid;
  height: 100%;
  width: 30%;
  align-content: center;
  gap: 1em;
  margin: auto;
`;

export const FormTitle = styled.h1`
  color: ${props => props.theme.orange};
  text-align: center;
  font-size: 3em;
`;

export const Input = styled.input`
  padding: 0 0.8em;
  height: 3em;
  border-radius: 8px;
  border-style: solid;
`;

export const SubmitButton = styled(Button1)`
  margin: 2em 4em 0;
  padding: 0.5em 0.8em;
`;

export const ErrorText = styled.p`
  color: ${props => props.theme.orange};
  padding: 0;
  margin: -0.5em 0 0 1em;
`;
