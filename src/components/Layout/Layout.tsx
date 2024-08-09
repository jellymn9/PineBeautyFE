import { Outlet } from "react-router-dom";
import { Container, ContentContainer } from "./LayoutStyled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <Container>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <Footer />
    </Container>
  );
}

export default Layout;
