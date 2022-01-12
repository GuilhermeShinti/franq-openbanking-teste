import { ToastContainer } from "react-toastify";
import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/SignUp";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <GlobalStyle />
      <SignUp></SignUp>
      <ToastContainer autoClose={3000}/>
    </>
  );
}