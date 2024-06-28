import { Outlet } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./Context/useAuth";
import DefaultLayout from "./Components/DefaultLayout";

function App() {
  return (
    <>
      <UserProvider>
        <DefaultLayout>
          <Outlet />
          <ToastContainer />
        </DefaultLayout>
      </UserProvider>
    </>
  );
}

export default App;
