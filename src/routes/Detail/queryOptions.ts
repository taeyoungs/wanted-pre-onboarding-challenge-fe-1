import getTodo from 'api/todo/getTodo';
import { todoKeys } from 'factory';

const todoQuery = (id: string) => ({
  queryKey: todoKeys.detail(id),
  queryFn: getTodo,
});

export { todoQuery };
