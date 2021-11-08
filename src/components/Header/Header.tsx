import { Link } from "react-router-dom";
import Endpoints from "../../app/endpoints";
import { Button1 } from "../../styled/common";
import Logout from "../Logout/Logout";
import { Container, Content, LogoutButton, Title } from "./Header.styled";

const Header: React.FC = () => {
  const title = (
    <Link to={Endpoints.appEndpoints.home}>
      <Title>Calendar App</Title>
    </Link>
  );

  const addNew = (
    <Link to={Endpoints.appEndpoints.new}>
      <Button1>Add new</Button1>
    </Link>
  );

  const loggedIn = (
    <Logout>
      <LogoutButton>Log out</LogoutButton>
    </Logout>
  );

  return (
    <Container>
      <Content>
        {title}
        {addNew}
        {loggedIn}
      </Content>
    </Container>
  );
};

export default Header;
