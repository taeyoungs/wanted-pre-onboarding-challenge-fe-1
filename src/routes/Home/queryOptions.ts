import getTodos from 'api/todo/getTodos';

const todosQuery = () => ({
  queryKey: [{ scope: 'todo' }],
  queryFn: getTodos,
});

export { todosQuery };
