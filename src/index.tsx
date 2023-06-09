import { createRoot } from "react-dom/client";
import App from "@/App";
import "@/css/style.css";

const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(<App />);
