import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProtectedRoute from "./utils/ProtectedRoute"
import { AuthProvider } from './context/AuthContext'
import {Dashboard, Home, Login, Register, Info} from "./pages"
import './index.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" exact element={<Home />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App