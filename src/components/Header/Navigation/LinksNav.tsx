import { navLinks, routes } from "@/utils/constants";
import {
  BarAnimationContainer,
  CircleAnimation,
  HoverBar,
  LinksContainerNav,
  LinkStyled,
} from "./LinksNavStyled";
import CartHeader from "../CartHeaderLink/CartHeader";
import { useHoverBarAnimation } from "@/helpers/customHooks";

const LinksNav = () => {
  const { hoverLinkWidth, translateStep, handleHover, handleMouseLeave } =
    useHoverBarAnimation();
  return (
    <LinksContainerNav>
      <BarAnimationContainer
        onMouseOver={(e) => handleHover(e)}
        onMouseLeave={handleMouseLeave}
      >
        <HoverBar $step={translateStep} $linkWidth={hoverLinkWidth} />
        {navLinks.textualLinks.map(({ route, name }) => (
          <LinkStyled to={route} key={route}>
            {name}
          </LinkStyled>
        ))}
      </BarAnimationContainer>
      <CircleAnimation>
        {navLinks.iconLinks.map(({ route, icon }) => {
          if (route === routes.cart) {
            return (
              <LinkStyled to={route} key={route}>
                <CartHeader icon={icon} />
              </LinkStyled>
            );
          } else {
            return (
              <LinkStyled to={route} key={route}>
                {icon}
              </LinkStyled>
            );
          }
        })}
      </CircleAnimation>
    </LinksContainerNav>
  );
};

export default LinksNav;
