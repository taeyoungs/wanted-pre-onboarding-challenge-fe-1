import { ActionFunctionArgs, redirect } from 'react-router-dom';

import signUp from 'api/auth/signup';
import { TOKEN } from 'constants';

type SignUpParameters = Parameters<typeof signUp>[0];

function isSignUpParameters(args: any): args is SignUpParameters {
  const hasEmail = args.email !== undefined;
  const hasPassword = args.password !== undefined;

  return hasEmail && hasPassword;
}

const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const formDataEntries = Object.fromEntries(formData);

  if (!isSignUpParameters(formDataEntries)) {
    throw new Error('Incorrect name mapping of html tag.');
  }

  try {
    const { token, message } = await signUp(formDataEntries);

    if (!token) {
      alert('토큰 정보가 유요하지 않습니다.');
      return redirect('/auth/create');
    }

    localStorage.setItem(TOKEN, token);
    alert(message);
    return redirect('/');
  } catch (error) {
    alert('회원가입에 실패했습니다.');
    return redirect('/auth/create');
  }
};

export { action };
