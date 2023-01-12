import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { TOKEN } from 'constants';

function AuthLayout() {
  const location = useLocation();
  const token = localStorage.getItem(TOKEN);

  if (!token) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default AuthLayout;
