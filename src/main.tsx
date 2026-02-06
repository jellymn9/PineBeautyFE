import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { HelmetProvider } from "react-helmet-async";

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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Profiler id="App" onRender={onRender}>
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
                      <RouterProvider router={router} />
                    </HelmetProvider>
                  </ThemeProvider>
                </Provider>
              </ToastProvider>
            </DrawerProvider>
          </CartProvider>
        </AuthProvider>
      </RootErrorBoundary>
    </Profiler>
  </React.StrictMode>,
);
