import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import { AuthProvider } from './context/AuthContext';
import './index.css';
import { Acceuil, Dashboard, Info, Login, Register } from "./pages";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route
            path="/acceuil"
            element={
              <ProtectedRoute>
                <Acceuil />
              </ProtectedRoute>
            } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;