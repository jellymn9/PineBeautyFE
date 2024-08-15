import { Outlet } from "react-router-dom";
import { Container, ContentContainer } from "./LayoutStyled";
import Header from "../Header/Header";

function Layout() {
  return (
    <Container>
      <ContentContainer>
        <Header />
      </ContentContainer>
      <Outlet />
    </Container>
  );
}

export default Layout;
