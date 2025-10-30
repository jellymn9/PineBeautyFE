import { Outlet } from "react-router-dom";
import { Container, ContentContainer } from "./LayoutStyled";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import NavDrawer from "@/components/Header/NavDrawer/NavDrawer";

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
