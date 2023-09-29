import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {

  return (
    <>
    <Provider store={store}>
    <Home></Home>
    <Login></Login>
    <SignUp></SignUp>
    </Provider>
    </>
  )
}

export default App
