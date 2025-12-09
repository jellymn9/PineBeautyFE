import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import NavDrawer from "@/components/Header/NavDrawer/NavDrawer";
import { Container, ContentContainer, SkipToMainLink } from "./LayoutStyled";

function Layout() {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    if (mainRef.current) {
      mainRef.current.focus({ preventScroll: true });
    }
  }, [location.pathname]);

  return (
    <Container>
      <SkipToMainLink href="#main-content">Skip to main content</SkipToMainLink>
      <Header />
      <NavDrawer />
      <ContentContainer id="main-content" tabIndex={-1} ref={mainRef}>
        <Outlet />
      </ContentContainer>
      <Footer />
    </Container>
  );
}

export default Layout;
