import { useState } from 'react';
import { Form } from 'react-router-dom';
import { css } from '@emotion/css';

import { action } from './utils';
import { EMAIL_REGEX, MIN_LEGNTH } from 'constants';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const isNotAvailale = password.length < MIN_LEGNTH || !EMAIL_REGEX.test(email);

  return (
    <section>
      <h1>로그인</h1>
      <Form
        method="post"
        className={css`
          border-radius: 10px;
          box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
          padding: 32px 24px;
          box-sizing: border-box;
          display: inline-block;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: column;
            width: 400px;
            gap: 10px;
          `}
        >
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="text"
            name="email"
            required
            placeholder="이메일"
            value={email}
            onChange={handleEmail}
          />
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            placeholder="비밀번호"
            value={password}
            onChange={handlePassword}
          />
          <button
            className={css`
              margin: 20px 0 0;
            `}
            disabled={isNotAvailale}
            type="submit"
          >
            제출
          </button>
        </div>
      </Form>
    </section>
  );
}

Login.action = action;

export default Login;
