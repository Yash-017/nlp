import React from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

import "./App.css";




export function Home() {
  return (
    // BEM
    <div className="Appp">
      <Sidebar />
     <Feed/>
     <Widgets/>
    
     
     
  
      
    
      
      </div>
  );
  
}

export default Home;