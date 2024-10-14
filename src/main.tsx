import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import routes from "./routes";
import "./index.css";

const router = createBrowserRouter(routes);

function onRender(
  id: unknown,
  phase: unknown,
  actualDuration: unknown,
  baseDuration: unknown,
  startTime: unknown,
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
        <RouterProvider router={router} />
      </Provider>
    </Profiler>
  </React.StrictMode>
);
