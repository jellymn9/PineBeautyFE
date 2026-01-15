import { Loader as LoaderLucide } from "lucide-react";
import { LoaderWrapper } from "./LoaderStyled";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <LoaderLucide width={280} height={280} />
    </LoaderWrapper>
  );
};
