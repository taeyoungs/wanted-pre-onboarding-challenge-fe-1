import { useQuery } from '@tanstack/react-query';
import { useAsyncValue } from 'react-router-dom';

import { todosQuery } from 'routes/Home/queryOptions';

function TodoList() {
  const initialData = useAsyncValue() as Awaited<
    ReturnType<ReturnType<typeof todosQuery>['queryFn']>
  >;

  const { data: todos } = useQuery({
    ...todosQuery(),
    initialData,
  });

  return (
    <section>
      <h2>Todo List</h2>
      <ul>
        {todos.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </section>
  );
}

export default TodoList;
