import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Route, Routes } from "react-router-dom";
import Design from "./Pages/Design/Design";

function App() {
  return (
    <>
        <Provider store={store}>
          <Routes>
         <Route exact path={'/'} element={<Home></Home>}></Route>
         <Route exact path={'/design'} element={<Design></Design>}></Route>
          </Routes>
        </Provider>

    </>
  );
}

export default App;
