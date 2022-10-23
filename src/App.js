import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals, action} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <RowPost url={originals} title='Netflix Originals'></RowPost>
      <RowPost url={action} title='Action' isSmall></RowPost>
    </div>
  );
}

export default App;
