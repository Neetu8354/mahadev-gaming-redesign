import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
// import { enforceCanonicalHost } from "./lib/canonicalHost";

// enforceCanonicalHost(); // Disabled to prevent redirect loop

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
