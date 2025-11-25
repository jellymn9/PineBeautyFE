import { RefreshCw } from "lucide-react";
import { Wrapper, Title, Message, ReloadButton } from "./RootFallbackUIStyled";

export const RootFallbackUI = () => {
  return (
    <Wrapper>
      <Title>Something went wrong</Title>

      <Message>
        The application ran into an unexpected issue. <br />
        Try reloading the page or return to the previous screen.
      </Message>

      <ReloadButton onClick={() => window.location.reload()}>
        <RefreshCw size={16} />
        Reload App
      </ReloadButton>
    </Wrapper>
  );
};
