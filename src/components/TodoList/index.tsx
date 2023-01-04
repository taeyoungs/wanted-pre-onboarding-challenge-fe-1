import useTodos from './hooks/useTodos';

function TodoList() {
  const { data: todos } = useTodos();

  return (
    <ul>
      {todos.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
