import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import routes from "./routes";
import { GlobalStyles } from "./utils/globalStyles";
import "./index.css";

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
  commitTime: unknown
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
    commitTime
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Profiler id="App" onRender={onRender}>
      <Provider store={store}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </Provider>
    </Profiler>
  </React.StrictMode>
);
