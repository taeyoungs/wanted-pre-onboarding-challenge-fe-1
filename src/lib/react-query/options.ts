import { getTodo, getTodos } from 'api/todo';
import { todoKeys } from './factory';

const todoQueryOption = (id: string) => ({
  queryKey: todoKeys.detail(id),
  queryFn: getTodo,
});

const todosQueryOption = () => ({
  queryKey: todoKeys.all(),
  queryFn: getTodos,
});

export { todoQueryOption, todosQueryOption };
