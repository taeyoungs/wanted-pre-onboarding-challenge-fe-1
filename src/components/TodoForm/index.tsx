import { useState } from 'react';
import { css } from '@emotion/css';

import useCreateTodo from './hooks/useCreateTodo';

function TodoForm() {
  const { mutate: createTodo } = useCreateTodo();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  const handleContent: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setContent(e.target.value);
  };

  const handleSumbit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    createTodo({
      title,
      content,
    });
    setTitle('');
    setContent('');
  };

  return (
    <form
      onSubmit={handleSumbit}
      className={css`
        padding: 10px;
      `}
    >
      <div
        className={css`
          margin: 0 0 10px;
          display: flex;
          gap: 10px;
        `}
      >
        <label htmlFor="title">제목</label>
        <input id="title" name="title" type="text" required value={title} onChange={handleTitle} />
      </div>
      <div
        className={css`
          margin: 0 0 10px;
          display: flex;
          gap: 10px;
        `}
      >
        <label htmlFor="content">내용</label>
        <input
          className={css`
            min-width: 300px;
          `}
          id="content"
          name="content"
          type="text"
          required
          value={content}
          onChange={handleContent}
        />
      </div>
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoForm;
