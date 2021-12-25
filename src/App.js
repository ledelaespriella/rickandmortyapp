import React from 'react';
import Home from "./pages/home";
import Api from './pages/api';
import Maps from './pages/maps';
import Register from './pages/register';
import Product from "./pages/product";
import {
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import { AuthProvider } from './providers/auth.provider';
import AppLayout from './pages/layout/app.layout';

import { useAuth } from './hooks/auth.hook';

function RequiredAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();
  if (!auth.user) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
}

function App() {
  return (
    <AuthProvider>
      <Routes >
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />

          <Route path="/api" element={
            <RequiredAuth>
              <Api />
            </RequiredAuth>
          } />

          <Route path="/maps" element={
            <RequiredAuth>
              <Maps />
            </RequiredAuth>
          } />
          <Route
            path="/product"
            element={
              <RequiredAuth>
                <Product />
              </RequiredAuth>
            }
          />
        </Route>

      </Routes>
    </AuthProvider>
  )
}

export default App;
