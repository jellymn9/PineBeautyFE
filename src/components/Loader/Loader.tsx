import { Loader as LoaderLucide } from "lucide-react";
import { LoaderWrapper } from "./LoaderStyled";

interface LoaderProps {
  ariaLabel?: string;
}

export const Loader = ({ ariaLabel }: LoaderProps) => {
  return (
    <LoaderWrapper
      role="status"
      aria-live="polite"
      aria-label={ariaLabel || "Loading content"}
    >
      <LoaderLucide width={280} height={280} />
    </LoaderWrapper>
  );
};
