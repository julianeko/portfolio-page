import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./Start";
import Cv from "./Cv";
import Portfolio from "./Portfolio";
function Home() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/cv/" element={<Cv />} />
          <Route path="/portfolio/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Home;
