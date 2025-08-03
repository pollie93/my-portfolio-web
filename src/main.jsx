import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePorfolio from "./HomePorfolio";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePorfolio />
  </StrictMode>
);
