import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./app/routes";
import { ToastContainer } from "react-toastify";
import ThemeConfig from "./app/styles/themes";

function App() {
  return (
    <BrowserRouter>
      <ThemeConfig>
        <Router />
        <ToastContainer />
      </ThemeConfig>
    </BrowserRouter>
  );
}

export default App;
