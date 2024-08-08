import { Outlet } from "react-router-dom";
import { Container, ContentContainer } from "./LayoutStyled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <Container>
      <ContentContainer>
        <Header />
        <Outlet />
        <Footer />
      </ContentContainer>
    </Container>
  );
}

export default Layout;
