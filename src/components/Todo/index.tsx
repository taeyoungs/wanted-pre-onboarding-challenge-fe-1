import { css } from '@emotion/css';

import { useTodoById } from 'hooks/todo';

interface ITodoProps {
  id: string;
}

function Todo({ id }: ITodoProps) {
  const { data: todo } = useTodoById(id);

  return (
    <section
      className={css`
        border-radius: 10px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        padding: 24px;
        box-sizing: border-box;
      `}
    >
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
    </section>
  );
}

export default Todo;
