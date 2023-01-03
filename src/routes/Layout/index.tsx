import { Outlet } from 'react-router-dom';
import '../../App.css';

function Layout() {
  return (
    <main>
      <div>
        <ul>
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
}

export default Layout;
