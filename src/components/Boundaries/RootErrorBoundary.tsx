import React from "react";
import { RootFallbackUI } from "./RootFallbackUI";
import { reportError } from "@/monitoring/reportError";

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

  componentDidCatch(error: unknown, info: React.ErrorInfo) {
    console.error("Root error boundary caught:", error, info);

    reportError(error, {
      feature: "root_error_boundary",
      extra: {
        componentStack: info.componentStack,
      },
    });
  }

  render() {
    if (this.state.hasError) {
      return <RootFallbackUI />;
    }
    return this.props.children;
  }
}
