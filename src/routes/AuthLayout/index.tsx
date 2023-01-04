import { Navigate, Outlet, useLocation } from 'react-router-dom';

function AuthLayout() {
  const location = useLocation();
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default AuthLayout;
