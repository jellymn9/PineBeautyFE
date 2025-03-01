import { Outlet } from "react-router-dom";
import { Container, ContentContainer } from "./LayoutStyled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NavDrawer from "../Header/NavDrawer/NavDrawer";

function Layout() {
  return (
    <Container>
      <Header />
      <NavDrawer />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <Footer />
    </Container>
  );
}

export default Layout;
