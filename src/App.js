import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import MainPage from "./Pages/MainPage";
import Flights from "./Pages/Flights";

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage/>} />
    </Routes>

    <Routes>
      <Route path="/flights/" element={<Flights/>} />
    </Routes>
  </BrowserRouter>);
}
export default App;