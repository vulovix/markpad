import React from "react";
import ReactDOM from "react-dom/client";
import { Notifications } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";
import { Provider as ReduxProvider } from "react-redux";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import store from "./libs/redux/store.ts";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <MantineProvider defaultColorScheme="dark">
        <App />
        <Notifications />
      </MantineProvider>
    </ReduxProvider>
  </React.StrictMode>
);
