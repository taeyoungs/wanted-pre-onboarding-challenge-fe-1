import { useQuery } from '@tanstack/react-query';
import { useAsyncValue, useParams } from 'react-router-dom';
import { css } from '@emotion/css';

import { todoQueryOption } from 'lib/react-query/options';

function Todo() {
  const { id } = useParams();
  const initialData = useAsyncValue() as Awaited<
    ReturnType<ReturnType<typeof todoQueryOption>['queryFn']>
  >;

  const { data: todo } = useQuery({
    ...todoQueryOption(id as string),
    enabled: Boolean(id),
    initialData,
  });

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
