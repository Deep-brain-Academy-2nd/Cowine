import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
import GlobalStyle from "./GlobalStyle";
import WinePage from "./pages/WinePage";
import WineDetail from "./pages/WineDetail";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Counter from "./pages/Counter";
import Evaluation from "./pages/Evaluation";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wine" element={<WinePage />} />
        <Route path="/winedetail/:id" element={<WineDetail />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/test" element={<Counter />} />
      </Routes>
    </>
  );
}

export default App;
