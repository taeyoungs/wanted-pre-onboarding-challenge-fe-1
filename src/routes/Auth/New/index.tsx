import { useState } from 'react';
import { Form } from 'react-router-dom';
import { css } from '@emotion/css';

import { action } from './utils';

const MIN_LEGNTH = 8;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function New() {
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
    <div>
      <Form method="post">
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
          <button disabled={isNotAvailale} type="submit">
            제출
          </button>
        </div>
      </Form>
    </div>
  );
}

New.action = action;

export default New;
