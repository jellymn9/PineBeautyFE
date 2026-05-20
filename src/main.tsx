import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { store } from "@/store";
import routes from "@/routes";
import { GlobalStyles } from "@/styles/globalStyles";
//import "./index.css";
import { theme } from "@/styles/theme";
import { DrawerProvider } from "@/context/DrawerContext";
import { AuthProvider } from "@/context/AuthContext";
import { ToastProvider } from "@/context/ToastContext";
import { Toast } from "@/components/UI/Toast/Toast";
import { CartProvider } from "./context/CartContext";
import { RootErrorBoundary } from "./components/Boundaries/RootErrorBoundary";
import { initSentry } from "./monitoring/sentry";
import { reportError } from "@/monitoring/reportError";

initSentry();

const router = createBrowserRouter(routes);

function onRender(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id: unknown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  phase: unknown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  actualDuration: unknown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  baseDuration: unknown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  startTime: unknown,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  commitTime: unknown,
) {
  // Aggregate or log render timings...
  console.log(
    "id: ",
    id,
    "phase: ",
    phase,
    "actualDuration",
    actualDuration,
    "baseDuration: ",
    baseDuration,
    "startTime: ",
    startTime,
    "commitTime: ",
    commitTime,
  );
}

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);

  reportError(event.reason, {
    feature: "global",
    action: "unhandled_promise_rejection",
  });
});

window.addEventListener("error", (event) => {
  console.error("Global error:", event.error);

  reportError(event.error, {
    feature: "global",
    action: "window_error",
    extra: {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    },
  });
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Profiler id="App" onRender={onRender}>
      <QueryClientProvider client={queryClient}>
        <RootErrorBoundary>
          <AuthProvider>
            <CartProvider>
              <DrawerProvider>
                <ToastProvider>
                  <Provider store={store}>
                    <ThemeProvider theme={theme}>
                      <GlobalStyles />
                      <Toast />
                      <HelmetProvider>
                        <QueryClientProvider client={queryClient}>
                          <RouterProvider router={router} />
                        </QueryClientProvider>
                      </HelmetProvider>
                    </ThemeProvider>
                  </Provider>
                </ToastProvider>
              </DrawerProvider>
            </CartProvider>
          </AuthProvider>
        </RootErrorBoundary>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Profiler>
  </React.StrictMode>,
);
