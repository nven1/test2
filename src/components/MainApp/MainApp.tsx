import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Container } from "./MainApp.styled";

const MainApp: React.FC = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default MainApp;
