import { getTodos } from 'api/todo';
import { todoKeys } from 'lib/react-query/factory';

const todosQuery = () => ({
  queryKey: todoKeys.all(),
  queryFn: getTodos,
});

export { todosQuery };
