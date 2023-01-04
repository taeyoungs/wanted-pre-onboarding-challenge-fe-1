import { useQuery } from '@tanstack/react-query';
import { useAsyncValue, useParams } from 'react-router-dom';

import { todoQuery } from 'routes/Detail/queryOptions';

function Todo() {
  const { id } = useParams();
  const initialData = useAsyncValue() as Awaited<
    ReturnType<ReturnType<typeof todoQuery>['queryFn']>
  >;

  const { data: todo } = useQuery({
    ...todoQuery(id as string),
    enabled: Boolean(id),
    initialData,
  });

  return (
    <section>
      <h3>{todo.title}</h3>
      <p>{todo.content}</p>
    </section>
  );
}

export default Todo;
