import LoaderSVG from "@/assets/loader.svg?react";
import { LoaderWrapper } from "./LoaderStyled";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderSVG width={280} height={280} />
    </LoaderWrapper>
  );
};
