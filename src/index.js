import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AddModal from "./components/AddModal";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const rootElement = document.getElementById("root");
// const modalElement = document.getElementById("modal");

// const modalRoot = createRoot(modalElement);
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>
);

// modalRoot.render(<AddModal />);
