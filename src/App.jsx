import React, { useEffect, useState } from "react";
import "./App.css";
import { DarkModeProvier } from "./context/DarkModeContext";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UserProvider from "./context/UserContext";
import Test from "./components/Test";
import i18n from "./i18n";
import LangProvider from "./context/LangContext";

function App() {
  
  return (
    <div>
      <DarkModeProvier>
        <UserProvider>
          <LangProvider>
            <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
          </LangProvider>
        </UserProvider>
      </DarkModeProvier>
    </div>
  );
}

export default App;
