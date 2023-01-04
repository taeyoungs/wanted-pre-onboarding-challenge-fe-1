import getTodos from 'api/todo/getTodos';
import { todoKeys } from 'factory';

const todosQuery = () => ({
  queryKey: todoKeys.all(),
  queryFn: getTodos,
});

export { todosQuery };
