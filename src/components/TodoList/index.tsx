import { css } from '@emotion/css';

import TodoItem from 'components/TodoItem';
import { useTodos } from 'hooks/todo';

function TodoList() {
  const { data: todos } = useTodos();

  return (
    <ul
      className={css`
        padding: 0;
      `}
    >
      {todos.map(({ id, title, content }) => (
        <TodoItem key={id} title={title} id={id} content={content} />
      ))}
    </ul>
  );
}

export default TodoList;
