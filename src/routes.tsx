import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Film from './pages/Film';
import Login from './pages/Login';
import People from './pages/People';
import LocationPage from './pages/Location';
import Species from './pages/Species';
import Vehicles from './pages/Vehicles';
import ProtectedRoute from './components/ProtectedRoute';

const AppRoutes = () => {
  const isAuthenticated = localStorage.getItem('auth_token') !== null;

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/films"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Film />
          </ProtectedRoute>
        }
      />
      <Route
        path="/people"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <People />
          </ProtectedRoute>
        }
      />
      <Route
        path="/locations"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <LocationPage />
          </ProtectedRoute>
        }
      />
       <Route
        path="/species"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Species />
          </ProtectedRoute>
        }
      />
      <Route
        path="/vehicles"
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Vehicles/>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
