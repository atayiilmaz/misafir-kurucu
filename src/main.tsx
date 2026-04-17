import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";
import { AdminSessionProvider } from "@/features/admin/admin-session";
import { queryClient } from "@/lib/query-client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AdminSessionProvider>
        <App />
      </AdminSessionProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
