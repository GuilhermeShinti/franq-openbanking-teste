import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
      <ToastContainer autoClose={3000}/>
    </>
  );
}