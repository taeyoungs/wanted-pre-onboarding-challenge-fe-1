import { css } from '@emotion/css';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import '../../App.css';

function Layout() {
  const hasToken = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate({ pathname: '/' }, { replace: true });
  };

  return (
    <main>
      <div
        className={css`
          margin: 0 0 30px;
        `}
      >
        {hasToken ? (
          <button onClick={handleLogout}>로그아웃</button>
        ) : (
          <nav
            className={css`
              display: flex;
              gap: 10px;
            `}
          >
            <NavLink
              className={({ isActive }) => css`
                text-decoration: ${isActive ? 'underline' : 'none'};
                font-weight: ${isActive ? 700 : 400};
              `}
              to="auth/login"
            >
              로그인
            </NavLink>
            <NavLink
              className={({ isActive }) => css`
                text-decoration: ${isActive ? 'underline' : 'none'};
                font-weight: ${isActive ? 700 : 400};
              `}
              to="auth/new"
            >
              회원가입
            </NavLink>
          </nav>
        )}
      </div>
      <Outlet />
    </main>
  );
}

export default Layout;
