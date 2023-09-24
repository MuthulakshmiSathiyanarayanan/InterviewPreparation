import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import MyApp from "./App";
import Profile from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Profile />
    <MyApp />
  </StrictMode>
);
