import React from "react";
import { RootFallbackUI } from "./RootFallbackUI";

type RootErrorBoundaryProps = {
  children: React.ReactNode;
};

type RootErrorBoundaryState = {
  hasError: boolean;
};

export class RootErrorBoundary extends React.Component<
  RootErrorBoundaryProps,
  RootErrorBoundaryState
> {
  state: RootErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: unknown) {
    console.error("Root error boundary caught:", error, info);
    // logging here (Sentry, Firebase, etc.)
  }

  render() {
    if (this.state.hasError) {
      return <RootFallbackUI />;
    }
    return this.props.children;
  }
}
