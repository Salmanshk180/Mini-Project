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
import Dashboard from './admin/Dashboard';
import DesignApp from '../src/clientSide/Pages/App/App';


function App() {
  return (
    <>
        <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <Routes>
         <Route exact path={'/'} element={<Home></Home>}></Route>
         <Route exact path={'/app'} element={<DesignApp></DesignApp>}></Route>
         <Route exact path={'/design'} element={<Design></Design>}></Route>
         <Route exact path={'/about'} element={<About></About>}></Route>
         <Route exact path={'/contact'} element={<Contact></Contact>}></Route>
         <Route exact path={'/admin/dashboard'} element={<Dashboard></Dashboard>}></Route>
         {/* <Route exact path={'/admin/email'} element={<EmailPage></EmailPage>}></Route>
         <Route exact path={"/admin/chat"} element={<ChatPage></ChatPage>}></Route>
         <Route exact path={"/admin/account"} element={<UserAccountPage></UserAccountPage>}></Route>
         <Route exact path={"/admin/tabs"} element={<TabsPage></TabsPage>}></Route>
         <Route exact path={"/admin/carousel"} element={<CarouselPage></CarouselPage>}></Route> */}
         {/* <Route exact path={"/admin/carousel"} element={<CarouselPage></CarouselPage>}></Route>
         <Route exact path={'/templates'} element={<Templates></Templates>}></Route>
         <Route exact path={'/yourdesign'} element={<YourDesign></YourDesign>}></Route>
         <Route exact path={'/profile'} element={<Profile></Profile>}></Route> */}

        
          </Routes>
          {/* </PersistGate> */}
        </Provider>

    </>
  );
}

export default App;
