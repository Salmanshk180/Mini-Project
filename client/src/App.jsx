import "./App.css";
import Home from "../src/clientSide/Pages/Home/Home";
import Login from "../src/clientSide/Components/Login/Login";
import SignUp from "../src/clientSide/Components/SignUp/SignUp";
import { Provider } from "react-redux";
import { store } from "../src/clientSide/redux/store";
// import { PersistGate } from 'redux-persist/integration/react';
import { Route, Routes } from "react-router-dom";
import Design from "../src/clientSide/Pages/Design/Design";
import { About } from "../src/clientSide/Pages/About/About";
import { Contact } from "../src/clientSide/Pages/Contact/Contact";
import Dashboard from "./admin/Dashboard";
import DesignApp from "../src/clientSide/Pages/App/App";
import AdminLogin from "../src/admin/Login";
import AdminSignup from "../src/admin/SignUp";
import ErrorPage from "./ErrorPage";
import AdminDashboard from "../src/admin/Dashboard";
import TemplateEditor from "../src/admin/TemplateEditor";
import ProtectedRouteAdmin from "../src/admin/ProtectedRouteAdmin";
import Verification from "./admin/Verification";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <Routes>
          <Route exact path={"/"} element={<Home></Home>}></Route>
          <Route exact path={"/app"} element={<DesignApp></DesignApp>}></Route>
          <Route exact path={"/design"} element={<Design></Design>}></Route>
          <Route exact path={"/about"} element={<About></About>}></Route>
          <Route exact path={"/contact"} element={<Contact></Contact>}></Route>
          <Route
            exact
            path="/admin/dashboard"
            element={<ProtectedRouteAdmin element={<AdminDashboard />} />}
          />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route exact path={"/admin/signup"} element={<AdminSignup />} />
          <Route exact path={"/admin/verify"} element={<Verification />} />
          <Route exact path={"/admin/user-profile"} element={<AdminDashboard />} />
          <Route exact path={"/admin/add-templates"} element={<AdminDashboard />} />
          <Route exact path={"/admin/design-tools"} element={<AdminDashboard />} />
          <Route exact path={"/admin/design-tools/images"} element={<AdminDashboard />} />
          <Route exact path={"/admin/my-account"} element={<AdminDashboard />} />
          <Route exact path={"/*"} element={<ErrorPage></ErrorPage>}></Route>
          <Route
            exact
            path={"/admin/templateeditor"}
            element={<TemplateEditor></TemplateEditor>}
          ></Route>
        </Routes>
        {/* </PersistGate> */}
      </Provider>
    </>
  );
}

export default App;
