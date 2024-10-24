import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Loader from "./Pages/Loader";
function App(){
  return(
    <BrowserRouter>
    <header>
      <body>
      <Routes>
          <Route path="/land" element={<Loader/>}/>
        </Routes>
        <Routes>
          <Route path="/home" element={<Homepage/>}/>
        </Routes>
        
      </body>
    </header>
    </BrowserRouter>
  );
}
export default App;