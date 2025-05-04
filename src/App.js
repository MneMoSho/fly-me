import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import MainPage from "./Pages/MainPage";
import Flights from "./Pages/Flights";
import { AuthContext } from "./Context";

function App() {

  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value = {{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Routes>
          <Route path="/flights/" element={<Flights />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
export default App;