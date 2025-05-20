import "./App.css";
import { DarkModeProvier } from "./context/DarkModeContext";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UserProvider from "./context/UserContext";
import LangProvider from "./context/LangContext";
import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";
import LocationProvider from "./context/locationContext";
import Test from "./components/Test";

function App() {
  return (
    <div>
      <DarkModeProvier>
        <UserProvider>
          <LangProvider>
            <LocationProvider>
              <Toaster />
              <Layout>
                <Routes>
                  <Route path="/" element={<LoginPage />} />
                  <Route path="/dashboard" element={<DashboardPage />} />
                </Routes>
              </Layout>
              {/* <Test /> */}
            </LocationProvider>
          </LangProvider>
        </UserProvider>
      </DarkModeProvier>
    </div>
  );
}

export default App;
