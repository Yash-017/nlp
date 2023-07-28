import React from "react";

import {Rate} from "./Rate";
import {Playlist} from "./Playlist";
import {Play} from "./Play";
import {Search} from "./Search";
import "./App.css";


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Home from "./Home";

export function Appp() {
  return (
    // BEM
    <div className="Appp">
   
    
     <Routes>
       
        <Route path="/"  element={<Home />} />
        <Route path="/rate"  element={<Rate />} />
        <Route path="/search" element={<Search />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/play" element={<Play />} />
      </Routes> 
     
  
      
    
      
      </div>
  );
  
}

export default Appp;