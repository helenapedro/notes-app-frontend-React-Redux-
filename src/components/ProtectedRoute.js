import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/userSlice';

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
