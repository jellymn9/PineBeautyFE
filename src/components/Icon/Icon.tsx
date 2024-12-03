import type { IconNamesT } from "../../utils/types";
import ClockSVG from "../../assets/clock.svg?react";
import EmailSVG from "../../assets/email.svg?react";
import PhoneSVG from "../../assets/phone.svg?react";
import InstagramSVG from "../../assets/instagram.svg?react";
import FacebookSVG from "../../assets/facebook.svg?react";
import PinterestSVG from "../../assets/pinterest.svg?react";
import UserSVG from "../../assets/user.svg?react";
import CartSVG from "../../assets/cart.svg?react";
import LogoSVG from "../../assets/logo.svg?react";
import SearchSVG from "../../assets/search.svg?react";
import MinusSVG from "../../assets/minus.svg?react";
import PlusSVG from "../../assets/plus.svg?react";

interface IconPropsI {
  name: IconNamesT;
  width?: string;
  height?: string;
}

const Icon = function ({ name, width, height }: IconPropsI) {
  if (name === "clock") {
    return <ClockSVG width={width} height={height} />;
  }
  if (name === "email") {
    return <EmailSVG width={width} height={height} />;
  }
  if (name === "phone") {
    return <PhoneSVG width={width} height={height} />;
  }
  if (name === "instagram") {
    return <InstagramSVG width={width} height={height} />;
  }
  if (name === "facebook") {
    return <FacebookSVG width={width} height={height} />;
  }
  if (name === "pinterest") {
    return <PinterestSVG width={width} height={height} />;
  }
  if (name === "cart") {
    return <CartSVG width={width} height={height} />;
  }
  if (name === "user") {
    return <UserSVG width={width} height={height} />;
  }
  if (name === "logo") {
    return <LogoSVG width={width} height={height} />;
  }
  if (name === "search") {
    return <SearchSVG width={width} height={height} />;
  }
  if (name === "minus") {
    return <MinusSVG width={width} height={height} />;
  }
  if (name === "plus") {
    return <PlusSVG width={width} height={height} />;
  }
  return <></>;
};

export default Icon;
