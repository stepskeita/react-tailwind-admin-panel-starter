import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/tailwind.css";
import "./styles/index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { TourProvider } from "@reactour/tour";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <TourProvider steps={[]}>
          <App />
          <Toaster />
        </TourProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
