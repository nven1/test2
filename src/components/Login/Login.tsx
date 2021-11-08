import { Container, Title } from "./Login.styled";

const Login: React.FC = ({ children }) => {
  return (
    <Container>
      <Title>Calendar app</Title>
      {children}
    </Container>
  );
};

export default Login;
