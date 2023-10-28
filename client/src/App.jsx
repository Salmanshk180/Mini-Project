import "./App.css";
import Home from "../src/clientSide/Pages/Home/Home";
import Login from "../src/clientSide/Components/Login/Login";
import SignUp from "../src/clientSide/Components/SignUp/SignUp";
import { Provider } from "react-redux";
import {store} from "../src/clientSide/redux/store";
// import { PersistGate } from 'redux-persist/integration/react';
import { Route, Routes } from "react-router-dom";
import Design from "../src/clientSide/Pages/Design/Design";
import { About } from "../src/clientSide/Pages/About/About";
import { Contact } from "../src/clientSide/Pages/Contact/Contact";
import Dashboard from '../src/admin/Dashboard';
import EmailPage from "./admin/Email";
import ChatPage from "./admin/Chat";
import UserAccountPage from "./admin/Account";
import TabsPage from "./admin/Tabs";
import CarouselPage from "./admin/Carousel";
function App() {
  return (
    <>
        <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <Routes>
         <Route exact path={'/'} element={<Home></Home>}></Route>
         <Route exact path={'/design'} element={<Design></Design>}></Route>
         <Route exact path={'/about'} element={<About></About>}></Route>
         <Route exact path={'/contact'} element={<Contact></Contact>}></Route>
         <Route exact path={'/dashboard'} element={<Dashboard></Dashboard>}></Route>
         <Route exact path={'/admin/Email.jsx'} element={<EmailPage></EmailPage>}></Route>
         <Route exact path={"/admin/Chat.jsx"} element={<ChatPage></ChatPage>}></Route>
         <Route exact path={"/admin/Account.jsx"} element={<UserAccountPage></UserAccountPage>}></Route>
         <Route exact path={"/admin/Tabs.jsx"} element={<TabsPage></TabsPage>}></Route>
         <Route exact path={"/admin/Carousel.jsx"} element={<CarouselPage></CarouselPage>}></Route>
          </Routes>
          {/* </PersistGate> */}
        </Provider>

    </>
  );
}

export default App;
