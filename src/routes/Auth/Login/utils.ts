import login from 'api/auth/login';
import { ActionFunctionArgs, redirect } from 'react-router-dom';

type LoginParameters = Parameters<typeof login>[0];

function isLoginParameters(args: any): args is LoginParameters {
  const hasEmail = args.email !== undefined;
  const hasPassword = args.password !== undefined;

  return hasEmail && hasPassword;
}

const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const formDataEntries = Object.fromEntries(formData);

  const existedToken = localStorage.getItem('token');
  if (existedToken) {
    return redirect('/');
  }

  if (!isLoginParameters(formDataEntries)) {
    throw new Error('Incorrect name mapping of html tag.');
  }

  try {
    const { token } = await login(formDataEntries);

    if (!token) {
      alert('토큰 정보가 유요하지 않습니다.');
      return redirect('/auth/login');
    }

    localStorage.setItem('token', token);
    return redirect('/');
  } catch (error) {
    alert('로그인에 실패했습니다.');
    return redirect('/auth/login');
  }
};

export { action };
