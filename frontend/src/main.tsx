import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./AppRoute.tsx";
import Auth0ProviderWithNavigate from "./auth/Auth0ProviderWithNavigate.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Auth0ProviderWithNavigate>
        <AppRoute />
      </Auth0ProviderWithNavigate>
    </Router>
  </StrictMode>
);
