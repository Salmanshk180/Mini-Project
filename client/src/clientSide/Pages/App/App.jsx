import React from 'react'
import MainNavbar from '../../Components/MainNavbar/MainNavbar'
import {Sidebar} from '../App/Sidebar/';
import {Footer} from '../../Components/Footer/Footer';

const App = () => {
  return (
    <div>
        <MainNavbar></MainNavbar>
        <Sidebar/>
        <Footer/>
        
    </div>
  )
}

export default App