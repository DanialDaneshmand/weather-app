import React, { useEffect, useState } from "react";
import "./App.css";
import { DarkModeProvier } from "./context/DarkModeContext";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UserProvider from "./context/UserContext";
import LangProvider from "./context/LangContext";
import Layout from "./components/Layout";
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <DarkModeProvier>
        <UserProvider>
          <LangProvider>
            <Toaster/>
            <Layout>
              <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
              </Routes>
            </Layout>
          </LangProvider>
        </UserProvider>
      </DarkModeProvier>
    </div>
  );
}

export default App;
