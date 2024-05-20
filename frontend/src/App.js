import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProtectedRoute from "./utils/ProtectedRoute"
import { AuthProvider } from './context/AuthContext'
import {Dashboard, Home, Login, Register} from "./pages"


import './index.css';

function App() {
  return (
    <div className="h-screen w-auto flex flex-row justify-center items-center
    bg-sky-100
    ">
      <div className="border-2 w-96 h-auto
      flex flex-col justify-start items-center
      rounded-2xl border-sky-800 bg-white shadow-2xl p-4">

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
            </Routes>
          </AuthProvider>
        </Router>

    </div>

    </div >


  );
}

export default App;
