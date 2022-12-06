import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/routes";

function App() {
  return (
    <RouterProvider
      router={router}
      className="overflow-hidden"
    ></RouterProvider>
  );
}

export default App;
