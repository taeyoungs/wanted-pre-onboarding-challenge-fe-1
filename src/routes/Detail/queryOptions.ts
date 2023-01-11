import { getTodo } from 'api/todo';
import { todoKeys } from 'lib/react-query/factory';

const todoQuery = (id: string) => ({
  queryKey: todoKeys.detail(id),
  queryFn: getTodo,
});

export { todoQuery };
