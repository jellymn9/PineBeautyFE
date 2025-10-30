import { Container, DrawerBox } from "./DrawerStyled";
import { useDrawer } from "@/context/DrawerContext";

const Drawer = function ({ children }: { children: JSX.Element }) {
  const { isOpen } = useDrawer();

  return (
    <Container $isOpen={isOpen}>
      <DrawerBox $isOpen={isOpen}>{children}</DrawerBox>
    </Container>
  );
};

export default Drawer;
